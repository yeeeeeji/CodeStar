"use client";

import PaginationArrowBtn from "@/components/button/PaginationArrowBtn";
import PaginationNumberBtn from "@/components/button/PaginationNumberBtn";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

export default function Pagination() {
  return (
    <div className="flex justify-center">
      <div className="flex my-[50px] gap-[44px]">
        <PaginationArrowBtn />
        <PaginationNumberBtn />
        <PaginationNumberBtn num={2} />
        <PaginationNumberBtn num={3} />
        <PaginationNumberBtn num={4} />
        <PaginationNumberBtn num={5} />
        <PaginationArrowBtn right={true} />
      </div>
    </div>
  );
}

// interface PaginationProps {
//   hasNextPage: boolean;
//   hasPrevPage: boolean;
// }
// export default function Pagination({
//   hasNextPage,
//   hasPrevPage,
// }: PaginationProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const page = searchParams.get("page") ?? "1";
//   const perPage = searchParams.get("per_page") ?? "5";

//   return (
//     <div className="flex">
//       <button
//         disabled={!hasPrevPage}
//         onClick={() => {
//           router.push(`/case=${Number(page) - 1}&per_page=${perPage}`);
//         }}
//       >
//         <ArrowLeftCircleIcon />
//       </button>
//       {page} / {Math.ceil(10 / Number(perPage))}
//       <button
//         disabled={!hasNextPage}
//         onClick={() => {
//           router.push(`/case=${Number(page) + 1}&per_page=${perPage}`);
//         }}
//       >
//         <ArrowRightCircleIcon />
//       </button>
//     </div>
//   );
// }
