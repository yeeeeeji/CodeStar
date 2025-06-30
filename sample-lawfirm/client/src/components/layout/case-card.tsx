"use client";

import { createDetailURL } from "@/app/lib/url";
import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface CaseCardProps {
  caseId: number;
  title: string;
  content: string;
  winMark?: boolean;
}

export default function CaseCard({
  caseId,
  title,
  content,
  winMark = false,
}: CaseCardProps) {
  const pathname = usePathname();
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
        <ViewMoreBtn path={createDetailURL(pathname, caseId)} black={true} />
      </div>
    </div>
  );
}
