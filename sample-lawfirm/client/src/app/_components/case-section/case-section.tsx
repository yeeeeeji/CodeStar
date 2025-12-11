import CaseCard from "@/components/layout/case-card";
import WorkAreaTitle from "../work-area-section/work-area-title";
// import SearchBar from "@/components/layout/search-bar";
import { fetchCases } from "@/lib/db/cases/api";

export default async function CaseSection() {
  const cases = await fetchCases(3);
  return (
    <div className="flex justify-center my-[20px] sm:my-[180px]">
      <div className="w-[720px] md:w-[1000px] 2xl:w-[1440px]">
        <div className="flex justify-center">
          <WorkAreaTitle title="업무사례" position="center" />
        </div>

        {/* 카드 */}
        <div
          className="
            flex justify-between grid
            mt-[30px] mb-[50px] mx-[31px] grid-cols-1 gap-4
            sm:mb-[60px] sm:gap-6
            md:grid-cols-2
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
              mbContainerStyle="px-[20px] py-[13px] gap-1"
              mbTitleStyle="text-[12px]"
              mbContentStyle="text-[10px] line-clamp-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
