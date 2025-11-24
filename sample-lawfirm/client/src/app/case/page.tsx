"use client";

import Banner from "@/components/layout/banner";
import SearchBar from "@/components/layout/search-bar";
import CaseList from "./_component/case-list/case-list";
import Pagination from "./_component/pagination/pagination";
import CaseFilter from "./_component/case-filter/case-filter";
import { useEffect, useMemo, useState } from "react";
import { fetchCases, fetchCasesByCategory } from "@/lib/db/cases/api";
import { CaseSearchResults } from "@/types/case";
import { searchCases } from "@/hooks/searchCases";

export default function CasePage() {
  const [allCases, setAllCases] = useState<CaseSearchResults[]>([]);
  const [filteredCases, setFilteredCases] = useState<CaseSearchResults[]>([]);
  const [currentCases, setCurrentCase] = useState<CaseSearchResults[]>([]);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(0);
  const pageSize = 9;

  const [searchCategoryQuery, setSearchCategoryQuery] =
    useState<string>("전체");
  const [searchKeywordQuery, setSearchKeywordQuery] = useState<string>("");

  const handleSearchCategoryQuery = (query: string) => {
    setSearchCategoryQuery(query);
  };

  const handleSearchKeywordQuery = (query: string) => {
    setSearchKeywordQuery(query);
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedCases = useMemo(() => {
    const startIndesx = (currentPage - 1) * pageSize;
    return filteredCases.slice(startIndesx, startIndesx + pageSize);
  }, [filteredCases, currentPage]);

  useEffect(() => {
    const loadInitialDatas = async () => {
      try {
        const results = await fetchCases();
        setAllCases(results);
        setFilteredCases(results);
        setMaxPage(Math.ceil(results.length / pageSize));
        console.log(Math.ceil(results.length / pageSize), results);
      } catch (error) {
        console.error("업무 사례 초기 데이터 로딩 실패", error);
      }
    };
    loadInitialDatas();
  }, []);

  useEffect(() => {
    setCurrentCase(paginatedCases);
  }, [filteredCases, currentPage, paginatedCases]);

  useEffect(() => {
    setSearchKeywordQuery("");
    const searchCasesByCategory = async () => {
      try {
        const results =
          searchCategoryQuery === "전체"
            ? allCases
            : await fetchCasesByCategory(searchCategoryQuery);
        setFilteredCases(results);
        setCurrentPage(1);
      } catch (error) {
        console.error("카테고리 검색 결과 로딩 중 오류 발생", error);
      }
    };
    searchCasesByCategory();
  }, [searchCategoryQuery, allCases]);

  useEffect(() => {
    setSearchCategoryQuery("전체");
    const searchCaseByKeyword = async () => {
      try {
        const results = searchCases({
          keyword: searchKeywordQuery,
          cases: allCases,
        });
        setFilteredCases(results);
        setCurrentPage(1);
      } catch (error) {
        console.error("검색 결과 로딩 중 오류 발생", error);
      }
    };
    searchCaseByKeyword();
  }, [searchKeywordQuery, allCases]);

  useEffect(() => {
    setMaxPage(Math.ceil(filteredCases.length / pageSize));
    setStartPage(0);
  }, [filteredCases]);

  useEffect(() => {
    setPages(
      Array.from(
        { length: Math.min(5, maxPage - startPage) },
        (_, i) => startPage + i + 1
      )
    );
  }, [filteredCases, maxPage, startPage]);

  useEffect(() => {
    const startP = Math.floor(((currentPage ?? 0) - 1) / 5) * 5;
    setStartPage(startP);
  }, [currentPage]);

  return (
    <div>
      <Banner imageAlt="업무사례 배너" title="업무사례" />
      <div className="flex justify-center">
        <div className="w-[1440px]">
          <div>
            <div className="mt-[109px] mb-[100px] flex justify-between">
              <div className="flex flex-col justify-between">
                <div className="text-[40px] font-bold">업무사례</div>
                <CaseFilter searchFunc={handleSearchCategoryQuery} />
              </div>
              <div>
                <SearchBar searchFunc={handleSearchKeywordQuery} />
              </div>
            </div>
            {/* 사건카드 */}
            <CaseList cases={currentCases} />
            {/* 페이지네이션 */}
            <Pagination
              currentPage={currentPage}
              maxPage={maxPage}
              pages={pages}
              pageFunc={handleCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
