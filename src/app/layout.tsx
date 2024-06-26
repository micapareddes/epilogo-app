import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/cn'
import Head from 'next/head'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Epílogo',
  description: 'Explore novos livros e organize suas leituras em um lugar só.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body
        className={cn(
          'min-h-screen antialiased bg-white dark:bg-black',
          inter.className,
        )}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
