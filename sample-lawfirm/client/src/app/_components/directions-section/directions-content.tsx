interface DirectionsContentProps {
  title: string;
  content: string;
}

export default function DirectionsContent({
  title,
  content,
}: DirectionsContentProps) {
  return (
    <div className="flex justify-between text-2xl">
      <div className="w-[83px]">{title}</div>
      <div className="w-[350px]">{content}</div>
    </div>
  );
}
