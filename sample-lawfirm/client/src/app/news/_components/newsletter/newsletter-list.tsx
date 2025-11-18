import NewsletterItem from './newsletter-item';

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
      <div className='border-t-[5px] border-black' />

      {items.map((item) => (
        <NewsletterItem key={item.id} title={item.title} date={item.createdAt} />
      ))}
    </div>
  );
}
