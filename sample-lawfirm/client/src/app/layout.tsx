import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/component/header/header';

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  title: '법무법인 코드별',
  description: '신뢰를 중심으로 변화를 이끄는 로펌',
  openGraph: {
    title: '법무법인 코드별',
    description: '신뢰를 중심으로 변화를 이끄는 로펌',
    images: ['/images/logo.jpg'],
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
