import Image from 'next/image';
import ProfileTitle from './profile-title';

export default function ProfileInfo() {
  return (
    <div className='max-w-[1440px] mx-auto flex my-[50px]'>
      <div className='flex-[5.5]'>
        <ProfileTitle />
      </div>
      <div className='flex-[6.5] relative min-h-[400px]'>
        <Image
          src={`/images/introduce/profile-image.png`}
          alt='회사 설명 이미지'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 54vw'
        />
      </div>
    </div>
  );
}
