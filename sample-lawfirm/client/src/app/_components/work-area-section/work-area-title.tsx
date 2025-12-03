import { colors } from "@/constants/colors";
import { BriefcaseIcon } from "@heroicons/react/20/solid";

interface TitleProps {
  title: string;
  position?: "left" | "center" | "right";
  icon?: React.ElementType;
  iconColor?: string;
  textColor?: string;
  mbTextColor?: string;
}

export default function WorkAreaTitle({
  title,
  position = "left",
  icon = BriefcaseIcon,
  iconColor = colors.gray700,
  textColor = "black",
  mbTextColor = "black",
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
    return (
      <Icon
        className="w-4 h-4 md:w-6 md:h-6 lg:w-[30px] lg:h-[30px]"
        color={iconColor}
      />
    );
  };

  return (
    <div className="inline-block">
      <div className={`flex ${getSquarePosition()} mb-1.5 md:mb-3 lg:mb-5`}>
        {getIcon(icon)}
      </div>
      <div
        className={`font-bold text-[16px] sm:text-[28px] lg:text-[40px] text-${mbTextColor} sm:text-${textColor}`}
      >
        {title}
      </div>
    </div>
  );
}
