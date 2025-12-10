"use client";

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { categories } from "@/constants/categories";

export default function Header() {
  // const [open, setOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  // const handleMouseOver = () => {
  //   setOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   setOpen(false);
  // };

  return (
    <div className="flex flex-col items-center bg-codestar-dark-navy md:bg-transparent">
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
          suppressHydrationWarning
          className="hidden md:absolute md:flex justify-between h-[96px]"
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

        {/* 모바일 */}
        <div className="md:hidden flex justify-between items-center h-[62px] bg-white w-full pl-4 relative z-10">
          <Link href="/">
            <Image
              src="/images/logo/logo-navy.png"
              alt="logo"
              width={120}
              height={30}
            />
          </Link>
        </div>

        <button
          className="md:hidden w-[62px] h-[62px] bg-codestar-dark-navy flex items-center justify-center absolute top-0 right-0 z-30"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <Image src="/icons/close.svg" alt="close" width={24} height={24} />
          ) : (
            <Image
              src="/images/menu/menu.svg"
              alt="menu"
              width={24}
              height={24}
            />
          )}
        </button>

        {mobileOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-[500px] px-10 py-[74px] bg-codestar-dark-navy z-20">
            <div className="flex flex-col justify-between h-full">
              <div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="py-3 border-b border-white last:border-b-0"
                  >
                    <Link
                      href={category.href}
                      onClick={() => setMobileOpen(!mobileOpen)}
                      className="text-2xl font-semibold text-white"
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-lg font-semibold text-white">코드별</p>
                <p className="text-lg font-semibold text-white mt-2">
                  회원약관
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
