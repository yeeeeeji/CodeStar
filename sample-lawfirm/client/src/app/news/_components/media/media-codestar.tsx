import { fetchMediaList } from '@/lib/db/news/news-api';
import NewsList from '../shared/news-list';

export default async function MediaCodestar() {
  const codestarMediaList = await fetchMediaList();

  return (
    <div className='max-w-[1440px] mx-auto mb-89'>
      <div className='mb-18'>
        <p className='text-[40px] font-bold tracking-[-0.01em]'>미디어 코드별</p>
      </div>
      <NewsList items={codestarMediaList} />
    </div>
  );
}
