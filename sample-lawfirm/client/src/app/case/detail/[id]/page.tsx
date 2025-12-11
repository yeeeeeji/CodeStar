import Banner from "@/components/layout/banner";
import { fetchCase } from "@/lib/db/cases/api";
import { format } from "date-fns";
import { Suspense } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "@/components/layout/breadcrumb";

interface CaseDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CaseDetailPage({ params }: CaseDetailProps) {
  const id = (await params).id;
  const caseResult = await fetchCase(id);

  return (
    <div>
      <Breadcrumb title="업무사례" />
      <div className="hidden sm:block">
        <Banner imageAlt="업무사례 배너" title="업무사례" />
      </div>
      <div className="flex justify-center">
        <div className="w-full mx-[30px] sm:w-[1440px] sm:mx-0">
          <Suspense>
            {caseResult === undefined ? (
              <div></div>
            ) : (
              <div className="mt-8 mb-24 sm:mt-24">
                <div>
                  <div className="font-bold text-[28px] sm:text-[48px]">
                    {caseResult.title}
                  </div>
                  <div className="mt-4 mb-6 text-[12px] sm:mt-6 sm:mb-8 sm:text-[18px]">
                    <div>{`분류 > ${caseResult.category}`}</div>
                    <div className="flex text-gray-400 mt-1">
                      <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 my-auto" />
                      <div>
                        {format(caseResult.createdAt, "yy-MM-dd HH:mm")}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-8 sm:mb-12 border-t border-gray-200"></div>
                </div>
                <div className="text-[16px]/8 sm:text-[24px]/12 whitespace-pre-wrap">
                  {caseResult.content}
                </div>
                <div className="w-full my-12 border-t border-gray-200"></div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
