"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/constants/categories";

interface BreadcrumbProps {
  customItems?: Array<{ name: string; href?: string }>;
  textColor?: string;
  iconColor?: string;
  bgColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  contentGap?: number;
  title: string;
  titleSize?: number;
}

interface PathIndicatorProps {
  customItems?: Array<{ name: string; href?: string }>;
  textColor?: string;
  iconColor?: string;
}

export default function Breadcrumb({
  customItems,
  textColor = "text-codestar-dark-navy",
  iconColor = "text-codestar-dark-navy",
  bgColor = "white",
  paddingTop = 24,
  paddingBottom = 0,
  paddingLeft = 30,
  paddingRight = 30,
  contentGap = 15,
  title,
  titleSize = 32,
}: BreadcrumbProps) {
  return (
    <div
      className={`
        block sm:hidden
        bg-${bgColor}
        pt-[${paddingTop}px] 
        pb-[${paddingBottom}px] 
        pl-[${paddingLeft}px] 
        pr-[${paddingRight}px]
      `}
    >
      <div className={`pb-[${contentGap}px]`}>
        <PathIndicator
          customItems={customItems}
          textColor={textColor}
          iconColor={iconColor}
        />
      </div>
      <p className={`text-[${titleSize}px] font-bold text-${textColor}`}>
        {title}
      </p>
    </div>
  );
}

function PathIndicator({
  customItems,
  textColor = "text-codestar-dark-navy",
  iconColor = "text-codestar-dark-navy",
}: PathIndicatorProps) {
  const pathname = usePathname();
  const items: Array<{ name: string; href?: string }> = [];

  if (customItems) {
    items.push(...customItems);
  } else {
    const category = categories.find((cat) => pathname.startsWith(cat.href));

    if (category) {
      items.push({ name: category.name, href: category.href });

      if (pathname !== category.href) {
        const subItem = category.items.find(
          (item) => item.href !== "#" && pathname.startsWith(item.href)
        );

        if (subItem && subItem.name) {
          items.push({
            name: subItem.name,
            href: subItem.href !== "#" ? subItem.href : undefined,
          });
        }
      }
    }
  }

  if (items.length > 0) {
    items[items.length - 1] = { name: items[items.length - 1].name };
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <Link href="/" className={`${textColor}`}>
          홈
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className={`${iconColor}`}
              fill="none"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item.href ? (
              <Link href={item.href} className={`${textColor}`}>
                {item.name}
              </Link>
            ) : (
              <span className={`${textColor}`}>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
