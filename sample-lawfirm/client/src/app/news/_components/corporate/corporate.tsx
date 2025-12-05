import { fetchCorporateList } from '@/lib/db/news/news-api';
import NewsList from '../shared/news-list';

export default async function Corporate() {
  const corporateList = await fetchCorporateList();

  return (
    <div className='max-w-[1440px] mx-auto mt-[30px] md:mt-25 mb-14 md:mb-45'>
      <div className='mb-5 md:mb-18'>
        <p className='text-[20px] md:text-[40px] font-bold tracking-[-0.01em]'>법인소식</p>
      </div>
      <NewsList items={corporateList} />
    </div>
  );
}
