import ViewMoreBtn from "@/components/button/ViewMoreBtn";

interface CaseCardProps {
  title: string;
  content: string;
}

export default function CaseCard({ title, content }: CaseCardProps) {
  return (
    <div
      className={`px-[70px] py-[75px] border border-codestar-gray justify-items-start grid gap-8 h-[480px] text-[24px]`}
    >
      <div>{title}</div>
      <div>
        <div className="line-clamp-3">{content}</div>
      </div>
      <ViewMoreBtn black={true} />
    </div>
  );
}
