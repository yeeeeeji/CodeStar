import WorkAreaTitle from "../work-area-section/work-area-title";
import MemberCard from "./member-card";
import { UserGroupIcon } from "@heroicons/react/20/solid";

export default function MemberIntroSection() {
  return (
    <div className="flex justify-center my-[180px]">
      <div className="w-80 lg:w-[720px] 2xl:w-[1440px] justify-center">
        <div className="flex justify-center">
          <WorkAreaTitle
            title="구성원소개"
            position="center"
            icon={UserGroupIcon}
          />
        </div>
        <div
          className="
            justify-between grid mt-[85px]
            grid-cols-1
            lg:grid-cols-2
            2xl:grid-cols-4
          "
        >
          <MemberCard img="member1" name="이수희" part="의료제약그룹장" />
          <MemberCard img="member2" name="김민희" part="기업법무그룹장" />
          <MemberCard img="member3" name="이민우" part="채권추심그룹장" />
          <MemberCard img="member4" name="김광수" part="기업법무그룹원" />
        </div>
      </div>
    </div>
  );
}
