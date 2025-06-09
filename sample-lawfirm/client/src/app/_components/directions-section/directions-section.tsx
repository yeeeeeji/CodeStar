"use client";

import WorkAreaTitle from "../work-area-section/work-area-title";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";
import DirectionsContent from "./directions-content";
import ViewMoreBtn from "@/components/button/ViewMoreBtn";
import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { mutate } from "swr";

type NaverMap = naver.maps.Map;

export default function DirectionsSection() {
  const mapRef = useRef<NaverMap | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const isInitialized = useRef(false); // 초기화 상태 추적

  const storeMap = useCallback((map: NaverMap) => {
    mutate("/map", map);
  }, []);

  const initializeMap = useCallback(() => {
    // 이미 초기화되었거나 컨테이너가 없으면 리턴
    if (isInitialized.current || !mapContainerRef.current) {
      return;
    }

    // 네이버 지도 API가 로드되었는지 확인
    if (typeof window !== 'undefined' && window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
        zoom: 18,
      };

      try {
        const map = new window.naver.maps.Map(mapContainerRef.current, mapOptions);
        mapRef.current = map;
        isInitialized.current = true;
        storeMap(map);
      } catch (error) {
        console.error('지도 초기화 오류:', error);
      }
    }
  }, [storeMap]);

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
    setTimeout(() => {
      initializeMap();
    }, 100);
  };

  // 언마운트 시 지도 정리
  useEffect(() => {
    return () => {
      if (mapRef.current && isInitialized.current) {
        try {
          mapRef.current.destroy();
        } catch (error) {
          console.warn('지도 이미 제거 완', error);
        } finally {
          mapRef.current = null;
          isInitialized.current = false;
        }
      }
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
        <div className="col-span-7 relative">
          <div 
            ref={mapContainerRef}
            className="w-full h-full min-h-[400px]"
          >
          </div>
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
            onLoad={handleScriptLoad}
            onError={(e) => {
              console.error('네이버 지도 스크립트 로드 실패:', e);
            }}
          />
        </div>
      </div>
    </div>
  );
}