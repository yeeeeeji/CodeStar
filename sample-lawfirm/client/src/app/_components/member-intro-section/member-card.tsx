import Image from "next/image";
import Link from "next/link";

interface MemberCardProps {
  img: string;
  name: string;
  part: string;
}

export default function MemberCard({ name, part, img }: MemberCardProps) {
  return (
    <Link href={""}>
      <div className="relative h-[514px] w-[345px] 2xl:mb-0 mb-3">
        <Image
          src={`/images/members/${img}.png`}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute right-0 bottom-0 mb-[20px] justify-items-end">
          <div className="pr-[20px] pb-[8px] text-white text-2xl font-bold">
            {name} 변호사
          </div>
          <div className="pl-[13px] pr-[20px] py-[8px] bg-codestar-dark-navy text-white text-2xl font-bold">
            {part}
          </div>
        </div>
      </div>
    </Link>
  );
}
