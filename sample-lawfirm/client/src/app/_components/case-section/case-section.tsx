import CaseCard from "@/components/layout/case-card";
import WorkAreaTitle from "../work-area-section/work-area-title";
// import SearchBar from "@/components/layout/search-bar";
import { fetchCases } from "@/lib/db/cases/api";

export default async function CaseSection() {
  const cases = await fetchCases(3);
  return (
    <div className="flex justify-center my-[180px]">
      <div className="w-[720px] xl:w-[1000px] 2xl:w-[1440px]">
        <div className="2xl:grid 2xl:grid-cols-3 2xl:justify-between mb-[60px]">
          <WorkAreaTitle title="업무사례" />
          {/* <SearchBar /> */}
        </div>

        {/* 카드 */}
        <div
          className="
            flex justify-between grid
            grid-cols-1 gap-6
            xl:grid-cols-2
            2xl:grid-cols-3
          "
        >
          {cases.map((c) => (
            <CaseCard
              key={c.id}
              caseId={c.id}
              category={c.category}
              title={c.title}
              content={c.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
