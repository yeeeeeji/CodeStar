import { fetchCorporateList } from '@/lib/db/news/news-api';
import NewsList from '../shared/news-list';

export default async function Corporate() {
  const corporateList = await fetchCorporateList();

  return (
    <div className='max-w-[1440px] mx-auto mt-25 mb-45'>
      <div className='mb-18'>
        <p className='text-[40px] font-bold tracking-[-0.01em]'>법인소식</p>
      </div>
      <NewsList items={corporateList} />
    </div>
  );
}
