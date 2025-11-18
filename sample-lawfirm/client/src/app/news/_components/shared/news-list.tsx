import NewsCard from './news-card';

interface NewsItem {
  id: string;
  title?: string;
  image: string;
}

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  return (
    <div className='max-w-[1440px] mx-auto my-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[108px]'>
        {items.map((item) => (
          <NewsCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
