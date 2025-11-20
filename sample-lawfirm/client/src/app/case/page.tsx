"use client";

import Banner from "@/components/layout/banner";
import SearchBar from "@/components/layout/search-bar";
import CaseList from "./_component/case-list/case-list";
import Pagination from "./_component/pagination/pagination";
import CaseFilter from "./_component/case-filter/case-filter";
import { useEffect, useState } from "react";
import { fetchCases, fetchCasesByCategory } from "@/lib/db/cases/api";
import { CaseSearchResults } from "@/types/case";
import { searchCases } from "@/hooks/searchCases";

export default function CasePage() {
  const [cases, setCases] = useState<CaseSearchResults[]>([]);
  const [searchCategoryQuery, setSearchCategoryQuery] =
    useState<string>("전체");
  const [searchKeywordQuery, setSearchKeywordQuery] = useState<string>("");

  const handleSearchCategoryQuery = (query: string) => {
    setSearchCategoryQuery(query);
  };

  const handleSearchKeywordQuery = (query: string) => {
    setSearchKeywordQuery(query);
  };

  useEffect(() => {
    setSearchKeywordQuery("");
    const searchCasesByCategory = async () => {
      try {
        const results =
          searchCategoryQuery === "전체"
            ? await fetchCases()
            : await fetchCasesByCategory(searchCategoryQuery);
        setCases(results);
      } catch (error) {
        console.error("카테고리 검색 결과 로딩 중 오류 발생", error);
      }
    };
    searchCasesByCategory();
  }, [searchCategoryQuery]);

  useEffect(() => {
    setSearchCategoryQuery("전체");
    const searchCaseByKeyword = async () => {
      try {
        const cases = await fetchCases();
        const results = searchCases({
          keyword: searchKeywordQuery,
          cases: cases,
        });
        setCases(results);
      } catch (error) {
        console.error("검색 결과 로딩 중 오류 발생", error);
      }
    };
    searchCaseByKeyword();
  }, [searchKeywordQuery]);

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
            <CaseList cases={cases} />
            {/* 페이지네이션 */}
            <Pagination maxPage={13} />
          </div>
        </div>
      </div>
    </div>
  );
}
