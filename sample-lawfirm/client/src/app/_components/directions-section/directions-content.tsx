interface DirectionsContentProps {
  title: string;
  content: string;
}

export default function DirectionsContent({
  title,
  content,
}: DirectionsContentProps) {
  return (
    <div className="flex justify-between text-[12px] md:text-lg xl:text-xl 2xl:text-2xl">
      <div className="w-[46px] mr-[20px] md:w-[83px] md:mr-0 flex-shrink-0 2xl:mr-[30px]">
        {title}
      </div>
      <div className="w-full">{content}</div>
    </div>
  );
}
