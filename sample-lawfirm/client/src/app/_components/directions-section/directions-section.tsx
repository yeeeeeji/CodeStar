"use client";

import WorkAreaTitle from "../work-area-section/work-area-title";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import DirectionsContent from "./directions-content";
import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { mutate } from "swr";

type NaverMap = naver.maps.Map;

export default function DirectionsSection() {
  const mapRef = useRef<NaverMap | null>(null);

  const storeMap = useCallback((map: NaverMap) => {
    mutate("/map", map);
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
      zoom: 18,
    };

    const map = new window.naver.maps.Map("map", mapOptions);
    mapRef.current = map;

    storeMap(map);
  };

  // 맵이 unmount되면 파괴
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

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
        <div id="map" className="col-span-7">
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            onReady={initializeMap}
          />
        </div>
      </div>
    </div>
  );
}
