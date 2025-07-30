import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/Header'
import { Barlow } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '900'] // Указываем нужные начертания
})



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Турнирная система',
  description: 'Система управления турнирами',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </body>
    </html>
  )
}