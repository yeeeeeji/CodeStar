import Image from "next/image";

interface BannerProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
}

export default function Banner({
  imageSrc = "/images/introduce/introduce-banner.png",
  imageAlt = "배너",
  title,
}: BannerProps) {
  return (
    <div className="w-full h-[500px] relative">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />

      <div className="absolute inset-0 flex flex-col">
        <div className="h-24"></div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-white text-[60px] font-bold tracking-[-0.01em]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
