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
          <ViewMoreBtn black={true} path="/introduce#directions" />
        </div>
        <div className="col-span-7 relative">
          <div
            ref={mapContainerRef}
            className="w-full h-full min-h-[400px]"
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
      </div>
    </div>
  );
}
