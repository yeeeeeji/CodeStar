import CaseCard from "@/components/layout/case-card";
import { fetchCases } from "@/lib/db/cases/api";

export default async function CaseList() {
  const cases = await fetchCases();

  return (
    <div className="flex justify-between grid grid-cols-3 gap-6">
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
