"use client";

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "about",
    name: "법인소개",
    href: "/introduce",
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
    href: "/case",
    items: [
      {
        id: "4",
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
    href: "/consultation",
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
  // const [open, setOpen] = useState(false);

  // const handleMouseOver = () => {
  //   setOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   setOpen(false);
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="relative z-999 mx-6 w-full 2xl:w-[1440px]">
        {/* 하위 메뉴 바탕 상자 */}
        {/* <div
          className={`absolute w-full h-40 bg-black transition-all duration-300 ease-in-out transform ${
            open
              ? "translate-y-0 opacity-50"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        /> */}
        <div
          className="absolute flex justify-between h-[96px]"
          style={{ width: "100%" }}
        >
          <div className="my-auto px-[20px]">
            <Link href="/">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={160}
                height={38}
              />
            </Link>
          </div>
          <div
            // onMouseOver={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            className="my-auto"
          >
            <div className="flex text-white">
              {categories.map((category) => (
                <div key={category.id} className="px-[20px] ml-[20px]">
                  <Link
                    href={category.href}
                    className="my-3 hover:text-blue-600 hover:underline hover:underline-offset-[15px] block text-lg"
                  >
                    {category.name}
                  </Link>
                  {/* <div
                    className={`absolute transition-opacity duration-300 ease-in-out delay-0 ${
                      open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {category.items.map((item) => (
                      <div key={item.id}>{item.name}</div>
                    ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
