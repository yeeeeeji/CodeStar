import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import Image from "next/image";

interface CaseCardProps {
  title: string;
  content: string;
  winMark?: boolean;
}

export default function CaseCard({
  title,
  content,
  winMark = false,
}: CaseCardProps) {
  return (
    <div className="relative">
      {winMark ? (
        <div className="absolute right-7 -top-1">
          <Image
            src="/images/case/win-mark.png"
            alt="승소"
            width={68.5}
            height={80}
          />
        </div>
      ) : (
        <div></div>
      )}
      <div
        className={`px-[70px] py-[75px] border border-codestar-gray justify-items-start grid gap-10 h-[480px] text-[24px]`}
      >
        <div>{title}</div>
        <div>
          <div className="line-clamp-4">{content}</div>
        </div>
        <ViewMoreBtn black={true} />
      </div>
    </div>
  );
}
