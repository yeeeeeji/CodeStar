"use client";

import { useState } from "react";

const categories = [
  {
    id: "about",
    name: "법인소개",
    href: "#",
    items: [
      {
        id: "1",
        name: "법인소개",
        href: "#",
      },
      {
        id: "2",
        name: "법인소개",
        href: "#",
      },
      {
        id: "3",
        name: "법인소개",
        href: "#",
      },
    ],
  },
  {
    id: "cases",
    name: "업무사례",
    href: "#",
    items: [
      {
        id: "4",
        name: "",
        href: "#",
      },
    ],
  },
  {
    id: "team",
    name: "구성원 소개",
    href: "#",
    items: [
      {
        id: "5",
        name: "",
        href: "#",
      },
    ],
  },
  {
    id: "news",
    name: "소식/자료",
    href: "#",
    items: [
      {
        id: "6",
        name: "",
        href: "#",
      },
    ],
  },
  {
    id: "contact",
    name: "상담신청",
    href: "#",
    items: [
      {
        id: "7",
        name: "",
        href: "#",
      },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMouseOver = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className="relative mx-30">
      {/* 하위 메뉴 바탕 상자 */}
      <div
        className={`absolute w-full h-40 bg-black ${open ? "block" : "hidden"}`}
      ></div>
      <div className="absolute flex justify-between" style={{ width: "100%" }}>
        <div>
          <h1>로고</h1>
        </div>
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <div className="flex justify-between w-120 text-white">
            {categories.map((category) => (
              <div key={category.id}>
                <div className="my-3 border-b-2 border-transparent hover:border-indigo-600">
                  {category.name}
                </div>
                <div className={open ? "absolute block" : "hidden"}>
                  {category.items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
