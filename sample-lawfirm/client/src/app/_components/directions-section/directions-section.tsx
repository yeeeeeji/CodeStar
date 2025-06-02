import WorkAreaTitle from "../work-area-section/work-area-title";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import DirectionsContent from "./directions-content";
import ViewMoreBtn from "@/components/button/ViewMoreBtn";

export default function DirectionsSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] grid grid-cols-12">
        <div className="col-span-5 px-[70px] pt-[70px] pb-[54px]">
          <WorkAreaTitle
            title="오시는 길"
            position="left"
            icon={BuildingOfficeIcon}
          />
          <div className="mt-[42px] mb-[35px]">
            <DirectionsContent
              title="주소"
              content="경기도 수원시 팔달구 효원로 03번길1-25 효원빌딩 7층"
            />
            <div className="h-[25px]" />
            <DirectionsContent title="우편번호" content="05183" />
          </div>
          <ViewMoreBtn black={true} />
        </div>
        <div className="col-span-7">지도</div>
      </div>
    </div>
  );
}
