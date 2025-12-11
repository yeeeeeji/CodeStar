"use client";

import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface CaseCardProps {
  caseId: string;
  category: string;
  title: string;
  content: string;
  winMark?: boolean;
}

export default function CaseCard({
  caseId,
  category,
  title,
  content,
  winMark = false,
}: CaseCardProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="relative">
      {winMark ? (
        <div>
          <div className="hidden sm:block absolute right-7 -top-1">
            <Image
              src="/images/case/win-mark.svg"
              alt="승소"
              width={68.5}
              height={80}
            />
          </div>
          <div className="sm:hidden absolute right-5 -top-1">
            <Image
              src="/images/case/win-mark.svg"
              alt="승소"
              width={40}
              height={46}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div
        className={`
          border border-codestar-gray justify-items-start grid
          px-[20px] py-[40px] gap-3
          sm:px-[70px] sm:py-[75px] sm:h-[480px] sm:gap-10
        `}
      >
        <div className="line-clamp-1 text-[20px] sm:text-[24px]">
          [{category}] {title}
        </div>
        <div>
          <div
            className={`
            line-clamp-3 text-[16px]
            sm:line-clamp-4 sm:text-[24px]
            
          `}
          >
            {content}
          </div>
        </div>
        <ViewMoreBtn path={`case/detail/${caseId}`} black={true} />
      </div>
    </div>
  );
}
