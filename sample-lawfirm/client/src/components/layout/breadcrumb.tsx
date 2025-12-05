'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { categories } from '@/constants/categories';

interface BreadcrumbProps {
  customItems?: Array<{ name: string; href?: string }>;
  textColor?: string;
  iconColor?: string;
}

export default function Breadcrumb({
  customItems,
  textColor = 'text-codestar-dark-navy',
  iconColor = 'codestar-dark-navy'
}: BreadcrumbProps) {
  const pathname = usePathname();
  const items: Array<{ name: string; href?: string }> = [];

  if (customItems) {
    items.push(...customItems);
  } else {
    const category = categories.find((cat) => pathname.startsWith(cat.href));

    if (category) {
      items.push({ name: category.name, href: category.href });

      if (pathname !== category.href) {
        const subItem = category.items.find((item) =>
          item.href !== '#' && pathname.startsWith(item.href)
        );

        if (subItem && subItem.name) {
          items.push({
            name: subItem.name,
            href: subItem.href !== '#' ? subItem.href : undefined
          });
        }
      }
    }
  }

  if (items.length > 0) {
    items[items.length - 1] = { name: items[items.length - 1].name };
  }

  return (
    <div className='md:hidden'>
      <div className='flex items-center gap-2'>
        <Link href='/' className={`${textColor}`}>
          홈
        </Link>
        {items.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
            <Image
              src='/icons/chevron-right.svg'
              alt='>'
              width={16}
              height={16}
              className={`${iconColor}`}
            />
            {item.href ? (
              <Link href={item.href} className={`${textColor}`}>
                {item.name}
              </Link>
            ) : (
              <span className={`${textColor}`}>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}