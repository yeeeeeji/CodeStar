"use client";

import { useCallback, useEffect, useRef } from "react";
import { mutate } from "swr";

type NaverMap = naver.maps.Map;
type NaverMapMarker = naver.maps.Marker;

export const useNaverMap = (
  mapContainerRef: React.RefObject<HTMLDivElement | null>
) => {
  const mapRef = useRef<NaverMap | null>(null);
  const markerRef = useRef<NaverMapMarker | null>(null);
  const isInitialized = useRef(false);

  const storeMap = useCallback((map: NaverMap) => {
    mutate("/map", map);
  }, []);

  const initializeMap = useCallback(() => {
    if (isInitialized.current || !mapContainerRef.current) {
      return;
    }

    if (typeof window !== "undefined" && window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5262411, 126.99289439),
        minZoom: 17,
        maxZoom: 17,
      };

      try {
        const map = new window.naver.maps.Map(
          mapContainerRef.current,
          mapOptions
        );

        const marker = new naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.5262411, 126.99289439),
          map,
        });

        mapRef.current = map;
        markerRef.current = marker;
        isInitialized.current = true;
        storeMap(map);
      } catch (error) {
        console.error("지도 초기화 오류:", error);
      }
    }
  }, [storeMap]);

  useEffect(() => {
    return () => {
      if (mapRef.current && isInitialized.current) {
        try {
          mapRef.current.destroy();
        } catch (error) {
          console.warn("지도 이미 제거 완", error);
        } finally {
          mapRef.current = null;
          isInitialized.current = false;
        }
      }
    };
  }, []);

  const handleScriptLoad = () => {
    setTimeout(() => {
      initializeMap();
    }, 100);
  };

  return { mapRef, initializeMap, handleScriptLoad };
};
