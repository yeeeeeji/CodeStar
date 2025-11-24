import Image from "next/image";

export default function DirectionsContent() {
  return (
    <div className="flex justify-between my-[50px]">
      <div className="flex w-[588px]">
        <ImgCircle imgSrc="/images/map/bus.svg" width={64.4} height={76.51} />
        <div>
          <p className="text-[32px] font-bold mb-[20px]">버스 이용 시</p>
          <div>
            <div className="grid text-[24px]/5 gap-y-[40px]">
              <div>
                <p className="font-bold">수원시청 정류장 하차</p>
                <p className="whitespace-pre-line">
                  {`
                    일반버스: 82-1, 85, 92, 720-2 \n
                    직행좌석버스: 3002, 4000 \n
                    → 하차 후 도보 약 5분 (효원로 3번길 방향)
                  `}
                </p>
              </div>
              <div>
                <p className="font-bold">팔달구청 정류장 하차</p>
                <p className="whitespace-pre-line">
                  {`
                    일반버스: 13-1, 27, 36\n
                    → 하차 후 효원로 방향 도보 3분
                  `}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[588px]">
        <ImgCircle
          imgSrc="/images/map/subway.svg"
          width={58.07}
          height={77.23}
        />
        <div>
          <p className="text-[32px] font-bold mb-[20px]">지하철 이용 시</p>
          <div>
            <div className="grid text-[24px]/5 gap-y-[40px]">
              <div>
                <p className="font-bold">1호선 수원역 하차 후</p>
                <p className="whitespace-pre-line">
                  {`
                    → 4번 출구에서 나와 \n
                    버스 또는 택시 환승 (약 10분 소요)
                  `}
                </p>
              </div>
              <div>
                <p className="font-bold">분당선 수원시청역 하차 후</p>
                <p className="whitespace-pre-line">
                  {`
                    → 10번 출구 도보 약 8분 \n
                    → 효원로 3번길 방면으로 직진, 효원빌딩 7층
                  `}
                </p>
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
  width: number;
  height: number;
}

const ImgCircle = ({ imgSrc, width, height }: ImgCircleProps) => {
  return (
    <div className="relative flex justify-center items-center w-[102px] h-[102px] overflow-hidden rounded-full mr-[50px] bg-gray-100 ">
      <Image src={imgSrc} alt="오시는 길" width={width} height={height} />
    </div>
  );
};
