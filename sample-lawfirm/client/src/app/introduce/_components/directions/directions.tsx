// import Script from "next/script";
// import { useRef } from "react";

export default function Directions() {
  // const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-[200px]">
      <div className="text-center my-[50px]">
        <p className="text-[40px] font-bold tracking-[-0.01em] mb-[20px]">
          오시는 길
        </p>
        <p>경기도 수원시 팔달구 효원로 03번길 1-25 효원빌딩 7층</p>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}
