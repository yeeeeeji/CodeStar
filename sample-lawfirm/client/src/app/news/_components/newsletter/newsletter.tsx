// _components/newsletter/newsletter.tsx
import { fetchNewsletterList } from '@/lib/db/news';
import NewsletterList from './newsletter-list';

export default async function NewsLetter() {
  const newsletterData = await fetchNewsletterList();

  return (
    <div className='max-w-[1440px] mx-auto mb-45'>
      <div className='mb-5'>
        <p className='text-[40px] font-bold tracking-[-0.01em]'>뉴스레터</p>
      </div>
      <NewsletterList items={newsletterData} />
    </div>
  );
}
