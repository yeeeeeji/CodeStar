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
      <button className="border px-8 py-2 sm:px-12 sm:py-2.5 md:px-16 md:py-3 text-sm md:text-base lg:text-lg hover:bg-black hover:text-white transition-colors duration-300">
        자세히보기
      </button>
    </div>
  );
}
