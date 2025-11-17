import { fetchCorporateList } from '@/lib/db/news/corporate.api';
import CorporateCard from './corporate-card';

export default async function CorporateList() {
  const corporateList = await fetchCorporateList();

  return (
    <div className='max-w-[1440px] mx-auto my-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[108px]'>
        {corporateList.map((corporate) => (
          <CorporateCard key={corporate.id} title={corporate.title} image={corporate.image} />
        ))}
      </div>
    </div>
  );
}
