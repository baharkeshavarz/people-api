import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {notFound} from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import TanstackProvider from '@/utils/tanstack-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fetch User App',
  description: 'Generated by Bahar Keshavarz',
}

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}

export default async function RootLayout({
  children, params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
           <TanstackProvider>
              {children}
          </TanstackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}