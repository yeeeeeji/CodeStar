import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' ? 'https://code-star.vercel.app' : 'http://localhost:3000'
  ),
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
      <body className={`${pretendard.className} min-h-screen flex flex-col`}>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
