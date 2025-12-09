import CaseCard from "@/components/layout/case-card";
import { CaseSearchResults } from "@/types/case";

interface CaseListProps {
  cases: CaseSearchResults[];
}

export default function CaseList({ cases }: CaseListProps) {
  return (
    <div
      className={`
        flex grid gap-6
        grid-cols-1 mx-[30px]
        sm:justify-between sm:grid-cols-3 mx-0
      `}
    >
      {cases.map((c) => (
        <CaseCard
          key={c.id}
          caseId={c.id}
          category={c.category}
          title={c.title}
          content={c.content}
          winMark={true}
        />
      ))}
    </div>
  );
}
