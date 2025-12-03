"use client";

import WorkAreaTitle from "../work-area-section/work-area-title";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import DirectionsContent from "./directions-content";
import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import { useEffect, useRef } from "react";
import Script from "next/script";
import { useNaverMap } from "@/hooks/useNaverMap";

export default function DirectionsSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const { mapRef, initializeMap, handleScriptLoad } =
    useNaverMap(mapContainerRef);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.naver &&
      window.naver.maps &&
      !mapRef.current
    ) {
      initializeMap();
    }
  });

  return (
    <div className="flex justify-center mb-[15px] sm:mb-[40px]">
      <div className="sm:w-[1440px] sm:grid sm:grid-cols-12">
        <div className="sm:hidden flex justify-center mb-[31px]">
          <WorkAreaTitle
            title="오시는 길"
            position="center"
            icon={BuildingOfficeIcon}
          />
        </div>
        <div className="sm:order-last sm:col-span-6 md:col-span-7 relative">
          <div
            ref={mapContainerRef}
            className="w-full h-full sm:min-h-[400px] sm:mx-0 min-h-[196px] mx-[18px]"
          ></div>
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            onLoad={handleScriptLoad}
            onError={(e) => {
              console.error("네이버 지도 스크립트 로드 실패:", e);
            }}
          />
        </div>
        <div className="sm:order-first sm:px-[70px] sm:pt-[70px] sm:pb-[54px] sm:col-span-6 md:col-span-5">
          <div className="hidden sm:block">
            <WorkAreaTitle
              title="오시는 길"
              position="left"
              icon={BuildingOfficeIcon}
            />
          </div>
          <div className="mx-[22px] mt-[20px] mb-[30px] sm:mt-[42px] sm:mb-[35px] sm:mx-0">
            <DirectionsContent
              title="주소"
              content="경기도 수원시 팔달구 효원로 03번길1-25 효원빌딩 7층"
            />
            <div className="h-[7px] sm:h-[25px]" />
            <DirectionsContent title="우편번호" content="05183" />
          </div>
          <div className="hidden md:block">
            <ViewMoreBtn black={true} path="/introduce#directions" />
          </div>
        </div>
      </div>
    </div>
  );
}
