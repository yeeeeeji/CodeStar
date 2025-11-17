import CorporateList from './corporate-list';

export default function Corporate() {
  return (
    <div className='max-w-[1440px] mx-auto my-25'>
      <div className='mb-18'>
        <p className='text-[40px] font-bold tracking-[-0.01em]'>법인소식</p>
      </div>
      <CorporateList />
    </div>
  );
}
