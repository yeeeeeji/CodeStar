import Banner from "@/components/layout/banner";
import { fetchCase } from "@/lib/db/cases/api";
import { format } from "date-fns";
import { Suspense } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

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
      <Banner imageAlt="업무사례 배너" title="업무사례" />
      <div className="flex justify-center">
        <div className="w-full sm:w-[1440px]">
          <Suspense>
            {caseResult === undefined ? (
              <div></div>
            ) : (
              <div className="mt-24 mb-24">
                <div>
                  <div className="text-[48px] font-bold">
                    {caseResult.title}
                  </div>
                  <div className="mt-6 mb-8 text-[18px]">
                    <div>{`분류 > ${caseResult.category}`}</div>
                    <div className="flex text-gray-400 mt-1">
                      <ClockIcon className="w-4 h-4 mr-1 my-auto" />
                      <div>
                        {format(caseResult.createdAt, "yy-MM-dd HH:mm")}
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-12 border-t border-gray-200"></div>
                </div>
                <div className="text-[24px]/12 whitespace-pre-wrap">
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
