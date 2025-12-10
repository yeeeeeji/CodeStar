"use client";

import { useRouter } from "next/navigation";

interface BackBtnProps {
  title: string;
  black?: boolean;
}

export default function BackBtn({ title, black = false }: BackBtnProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={`inline-flex items-center justify-center w-[100px] h-[25px] sm:w-40 sm:h-12 lg:w-48 lg:h-14 border text-[10px] sm:text-sm lg:text-base transition-colors duration-300 ${
        black
          ? `hover:bg-black hover:text-white`
          : `border-white text-white hover:bg-white hover:text-black`
      }`}
    >
      {title}
    </div>
  );
}
