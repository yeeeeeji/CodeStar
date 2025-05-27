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
      <div className="relative w-full">
        <Image
          src={`/images/members/${img}.png`}
          alt={name}
          width={200}
          height={100}
          layout="responsive"
        />
        <div className="absolute right-0 bottom-0 mb-[20px] justify-items-end">
          <div className="pr-[18px] pb-[5px] text-white text-2xl font-bold">
            {name} 변호사
          </div>
          <div className="pl-[10px] pr-[18px] py-[8px] bg-codestar-dark-navy text-white text-2xl font-bold">
            {part}
          </div>
        </div>
      </div>
    </Link>
  );
}
