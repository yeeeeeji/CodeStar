"use client";

import { useNaverMap } from "@/hooks/useNaverMap";
import Script from "next/script";
import { useEffect, useRef } from "react";
import DirectionsContent from "./directions-content";

export default function Directions() {
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
    <div id="directions" className="max-w-[1440px] mx-auto sm:mt-[200px]">
      <div className="text-center my-[31px] sm:my-[50px]">
        <p className="font-bold text-[16px] sm:text-[28px] lg:text-[40px] tracking-[-0.01em] mb-[8px] sm:mb-[20px]">
          오시는 길
        </p>
        <p className="text-[12px] sm:text-[18px] lg:text-[24px]">
          경기도 수원시 팔달구 효원로 03번길 1-25 효원빌딩 7층
        </p>
      </div>
      <div>
        <div className="mx-[18px] sm:mx-0">
          <div
            ref={mapContainerRef}
            className="w-full h-[196px] sm:h-[600px] lg:h-[830px]"
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
        <DirectionsContent />
      </div>
    </div>
  );
}
