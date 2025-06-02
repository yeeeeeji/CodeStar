import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import "./case-section.css";

interface CaseCardProps {
  title: string;
  content: string;
}

export default function CaseCard({ title, content }: CaseCardProps) {
  return (
    <div
      className={`px-[70px] py-[75px] border border-codestar-gray justify-items-start grid gap-8`}
    >
      <div className="text-[24px]">{title}</div>
      <div className="text-[24px] card-content">{content}</div>
      <ViewMoreBtn black={true} />
    </div>
  );
}
