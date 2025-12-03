import Image from "next/image";

export default function DirectionsContent() {
  return (
    <div className="sm:flex sm:justify-between my-[50px] mx-[17px] sm:mx-0">
      <div className={contentStyle}>
        <ImgCircle imgSrc="/images/map/bus.svg" />
        <div className="w-full">
          <MainTitle title="버스 이용 시" />
          <div>
            <div className="grid leading-normal gap-y-[10px] sm:gap-y-[40px]">
              <div>
                <BoldTitle title="수원시청 정류장 하차" />
                <TextBlock
                  contents={[
                    "일반버스: 82-1, 85, 92, 720-2",
                    "직행좌석버스: 3002, 4000",
                    "→ 하차 후 도보 약 5분 (효원로 3번길 방향)",
                  ]}
                />
              </div>
              <Border />
              <div>
                <BoldTitle title="팔달구청 정류장 하차" />
                <TextBlock
                  contents={[
                    "일반버스: 13-1, 27, 36",
                    "→ 하차 후 효원로 방향 도보 3분",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${contentStyle} mt-[38px] sm:mt-0`}>
        <ImgCircle imgSrc="/images/map/subway.svg" />
        <div className="w-full">
          <MainTitle title="지하철 이용 시" />
          <div>
            <div className="grid leading-normal gap-y-[10px] sm:gap-y-[40px]">
              <div>
                <BoldTitle title="1호선 수원역 하차 후" />
                <TextBlock
                  contents={[
                    "→ 4번 출구에서 나와",
                    "버스 또는 택시 환승 (약 10분 소요)",
                  ]}
                />
              </div>
              <Border />
              <div>
                <BoldTitle title="분당선 수원시청역 하차 후" />
                <TextBlock
                  contents={[
                    "→ 10번 출구 도보 약 8분",
                    "→ 효원로 3번길 방면으로 직진, 효원빌딩 7층",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contentStyle = "flex sm:w-[588px]";

interface ImgCircleProps {
  imgSrc: string;
}

const ImgCircle = ({ imgSrc }: ImgCircleProps) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-full bg-gray-100 flex-shrink-0
        w-[40px] h-[40px] mr-[11px]
        sm:w-[60px] sm:h-[60px] sm:mr-[30px]
        xl:w-[80px] xl:h-[80px] xl:mr-[40px]
        2xl:w-[102px] 2xl:h-[102px] 2xl:mr-[50px]
      `}
    >
      <div
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-[30px] h-[30px] 
          sm:w-[40px] sm:h-[40px] 
          xl:w-[50px] xl:h-[50px] 
          2xl:w-[70px] 2xl:h-[70px]
        `}
      >
        <Image src={imgSrc} alt="오시는 길" fill className="object-contain" />
      </div>
    </div>
  );
};

interface TitleProps {
  title: string;
}

const MainTitle = ({ title }: TitleProps) => {
  return (
    <p className="font-bold text-[16px] mb-[10px] sm:text-[32px] sm:mb-[20px]">
      {title}
    </p>
  );
};

const BoldTitle = ({ title }: TitleProps) => {
  return (
    <p className="font-bold text-blue-600 text-[12px] mb-[6px] sm:text-[24px] sm:mb-[12px]">
      {title}
    </p>
  );
};

interface TextBlockProps {
  contents: string[];
}

const TextBlock = ({ contents }: TextBlockProps) => {
  return (
    <div className="grid gap-y-1">
      {contents.map((c) => (
        <p key={c} className="text-[12px] sm:text-[24px]">
          {c}
        </p>
      ))}
    </div>
  );
};

const Border = () => {
  return <div className="sm:hidden w-full border-t border-gray-600"></div>;
};
