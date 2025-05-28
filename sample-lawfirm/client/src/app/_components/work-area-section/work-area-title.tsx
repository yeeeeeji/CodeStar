import { colors } from "@/constants/colors";
import { BriefcaseIcon } from "@heroicons/react/20/solid";

interface TitleProps {
  title: string;
  position?: "left" | "center" | "right";
  fontSize?: number;
  icon?: React.ElementType;
}

export default function WorkAreaTitle({
  title,
  position = "left",
  fontSize = 40,
  icon = BriefcaseIcon,
}: TitleProps) {
  const getSquarePosition = () => {
    switch (position) {
      case "right":
        return "justify-end";
      case "center":
        return "justify-center";
      case "left":
      default:
        return "justify-start";
    }
  };

  const getIcon = (Icon: React.ElementType) => {
    return <Icon className="size-8" color={colors.gray700} />;
  };

  return (
    <div className="inline-block">
      <div className={`flex ${getSquarePosition()} mb-[20px]`}>
        {getIcon(icon)}
      </div>
      <p className="font-bold" style={{ fontSize: `${fontSize}px` }}>
        {title}
      </p>
    </div>
  );
}
