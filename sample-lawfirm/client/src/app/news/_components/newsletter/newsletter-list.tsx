import NewsletterItem from './newsletter-item';
import NewsletterMobileCard from './newsletter-mobile-card';

interface Newsletter {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NewsletterListProps {
  items: Newsletter[];
}

export default function NewsletterList({ items }: NewsletterListProps) {
  return (
    <div>
      {/* 태블릿/데스크탑 */}
      <div className='hidden md:block'>
        <div className='border-t-[5px] border-black' />
        {items.map((item) => (
          <NewsletterItem key={item.id} title={item.title} date={item.createdAt} />
        ))}
      </div>

      {/* 모바일 */}
      <div className='md:hidden flex flex-col gap-[10px]'>
        {items.map((item) => (
          <NewsletterMobileCard key={item.id} title={item.title} date={item.createdAt} />
        ))}
      </div>
    </div>
  );
}