import Image from "next/image";

export default function DirectionsContent() {
  return (
    <div className="flex justify-between my-[50px]">
      <div className="flex w-[588px]">
        <ImgCircle imgSrc="/images/map/bus.svg" />
        <div>
          <p className="text-[32px] font-bold mb-[20px]">버스 이용 시</p>
          <div>
            <div className="grid text-[24px] leading-normal gap-y-[40px]">
              <div>
                <BoldTitle title="수원시청 정류장 하차" />
                <div className="grid gap-y-1">
                  <p>일반버스: 82-1, 85, 92, 720-2</p>
                  <p>직행좌석버스: 3002, 4000</p>
                  <p>→ 하차 후 도보 약 5분 (효원로 3번길 방향)</p>
                </div>
              </div>
              <div>
                <BoldTitle title="팔달구청 정류장 하차" />
                <div className="grid gap-y-1">
                  <p>일반버스: 13-1, 27, 36</p>
                  <p>→ 하차 후 효원로 방향 도보 3분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[588px]">
        <ImgCircle imgSrc="/images/map/subway.svg" />
        <div>
          <p className="text-[32px] font-bold mb-[20px]">지하철 이용 시</p>
          <div>
            <div className="grid text-[24px] leading-normal gap-y-[40px]">
              <div>
                <BoldTitle title="1호선 수원역 하차 후" />
                <div className="grid gap-y-1">
                  <p>→ 4번 출구에서 나와</p>
                  <p>버스 또는 택시 환승 (약 10분 소요)</p>
                </div>
              </div>
              <div>
                <BoldTitle title="분당선 수원시청역 하차 후" />
                <div className="grid gap-y-1">
                  <p>→ 10번 출구 도보 약 8분</p>
                  <p>→ 효원로 3번길 방면으로 직진, 효원빌딩 7층</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ImgCircleProps {
  imgSrc: string;
}

const ImgCircle = ({ imgSrc }: ImgCircleProps) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-full bg-gray-100 flex-shrink-0
        w-[60px] h-[60px] mr-[30px]
        xl:w-[80px] xl:h-[80px] xl:mr-[40px]
        2xl:w-[102px] 2xl:h-[102px] 2xl:mr-[50px]
      `}
    >
      <div
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[70px] 2xl:h-[70px]
        `}
      >
        <Image src={imgSrc} alt="오시는 길" fill className="object-contain" />
      </div>
    </div>
  );
};

interface BoldTitleProps {
  title: string;
}

const BoldTitle = ({ title }: BoldTitleProps) => {
  return <p className="font-bold mb-[12px]">{title}</p>;
};
