import Image from 'next/image';
import ProfileTitle from './profile-title';

export default function ProfileInfo() {
  return (
    <div className='max-w-[1440px] mx-auto px-[4.17%] flex pt-5 mt-34'>
      <div className='flex-1'>
        <ProfileTitle />
      </div>

      <div className='flex-1 flex'>
        <div className='flex-1 relative rounded-2xl overflow-hidden'>
          <Image src='/images/introduce/profile-image.png' alt='회사 설명 이미지' fill className='object-cover' />
        </div>
      </div>
    </div>
  );
}
