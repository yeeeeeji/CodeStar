import CaseCard from "@/components/layout/case-card";
import WorkAreaTitle from "../work-area-section/work-area-title";
import SearchBar from "@/components/layout/search-bar";

const cases = [
  {
    title: "[성범죄] 강제추행 사건에서 무죄",
    content:
      "의뢰인은 회사원으로, 퇴근 후 들른 헬스장에서 여성 회원과의 우연한 신체 접촉이 오해를 불러 강제추행 혐의로 신고를 당하였습니다.",
  },
  {
    title: "[가사] 이혼사건을 조속히 마무리",
    content:
      "의외인은 2018년경 상대방과 혼인하여 미성년 자녀 2명을 두고 있었습니다. 그러나 2023년 11월경 상대방이 갑자기 가출하여 가정에 문제가 생겼습니다.",
  },
  {
    title: "[형사] 사실관계 재구성으로 공동",
    content:
      "의뢰인은 이혼 소송 중 법원의 명령에 따라 배우자와 사전 면접교섭을 진행하던 중, 배우자가 자녀를 데리고 면접교섭 장소를 무단으로 이탈하는 사건이 발생하였습니다.",
  },
];

export default function CaseSection() {
  return (
    <div className="flex justify-center my-[180px]">
      <div className="w-[720px] xl:w-[1000px] 2xl:w-[1440px]">
        <div className="2xl:grid 2xl:grid-cols-3 2xl:justify-between mb-[60px]">
          <WorkAreaTitle title="업무사례" />
          <SearchBar />
        </div>

        {/* 카드 */}
        <div
          className="
            flex justify-between grid
            grid-cols-1
            xl:grid-cols-2 lg:gap-6
            2xl:grid-cols-3 2xl:gap-6
          "
        >
          {cases.map((c) => (
            <CaseCard key={c.title} title={c.title} content={c.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
