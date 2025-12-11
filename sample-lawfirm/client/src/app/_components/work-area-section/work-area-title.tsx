import { colors } from "@/constants/colors";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import React from "react";

interface TitleProps {
  title: string;
  position?: "left" | "center" | "right";
  icon?: React.ElementType;
  iconColor?: string;
  textColor?: string;
  mbIconColor?: string;
  mbTextColor?: string;
}

export default function WorkAreaTitle({
  title,
  position = "left",
  icon = BriefcaseIcon,
  iconColor = colors.gray700,
  mbIconColor,
  textColor = "black",
  mbTextColor = "black",
}: TitleProps) {
  const finalMbIconColor = mbIconColor || iconColor;

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
      <Icon className="w-6 h-6 lg:w-[30px] lg:h-[30px] text-[var(--mb-icon)] sm:text-[var(--dt-icon)] transition-colors duration-200" />
    );
  };

  const dynamicStyles = {
    "--mb-text": mbTextColor,
    "--dt-text": textColor,
    "--mb-icon": finalMbIconColor,
    "--dt-icon": iconColor,
  } as React.CSSProperties;

  return (
    <div className="inline-block" style={dynamicStyles}>
      <div
        className={`flex ${getSquarePosition()} mb-1.5 sm:mb-3 lg:mb-5 hidden sm:block`}
      >
        {getIcon(icon)}
      </div>
      <div
        className={`font-bold text-[24px] sm:text-[28px] lg:text-[40px] text-[var(--mb-text)] sm:text-[var(--dt-text)] transition-colors duration-200`}
      >
        {title}
      </div>
    </div>
  );
}
