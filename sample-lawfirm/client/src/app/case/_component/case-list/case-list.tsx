import CaseCard from "@/components/layout/case-card";

interface CaseListProps {
  cases: {
    id: number;
    title: string;
    content: string;
  }[];
}

export default function CaseList({ cases }: CaseListProps) {
  return (
    <div className="flex justify-between grid grid-cols-3 gap-6">
      {cases.map((c) => (
        <CaseCard key={c.title} title={c.title} content={c.content} />
      ))}
    </div>
  );
}
