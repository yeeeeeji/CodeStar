import Banner from "@/components/layout/banner";
import SearchBar from "@/components/layout/search-bar";
import CaseList from "./_component/case-list/case-list";
import { cases } from "./_component/case-list/data";
import Pagination from "./_component/pagination/pagination";
import CaseFilter from "./_component/case-filter/case-filter";

export default function CasePage() {
  return (
    <div>
      <Banner imageAlt="업무사례 배너" title="업무사례" />
      <div className="flex justify-center">
        <div className="w-[1440px]">
          <div>
            <div className="mt-[109px] mb-[100px] flex justify-between">
              <div className="flex flex-col justify-between">
                <div className="text-[40px] font-bold">업무사례</div>
                <CaseFilter />
              </div>
              <div>
                <SearchBar />
              </div>
            </div>
            {/* 사건카드 */}
            <CaseList cases={cases} />
            {/* 페이지네이션 */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
