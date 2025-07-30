'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Barlow } from 'next/font/google'
import { ArrowRightStartOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const barlow = Barlow({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-barlow'
})

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className={`${barlow.variable} font-sans bg-white border-b border-gray-200 sticky top-0 z-50`}>
      <div className="container mx-auto px-4 py-4"> {/* Уменьшенная высота */}
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tight text-gray-900">ProCastMTG</span>
          </div>

          {/* Навигация */}
          <nav className="flex space-x-6"> {/* Уменьшенный интервал */}
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-lg font-black ${
                isActive('/') 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors no-underline`}
            >
              Турниры
            </Link>
            <Link
              href="/points-table"
              className={`px-4 py-2 rounded-md text-lg font-black ${
                isActive('/points-table') 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors no-underline`}
            >
              Таблица
            </Link>
            <Link
              href="/organizer"
              className={`px-4 py-2 rounded-md text-lg font-black ${
                isActive('/organizer') 
                  ? 'bg-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors no-underline`}
            >
              Организаторам
            </Link>
          </nav>

          {/* Кнопки авторизации */}
          <div className="flex space-x-4"> {/* Уменьшенный интервал */}
            <Link
              href="/login"
              className="px-4 py-2 rounded-md border border-black text-lg font-black hover:bg-gray-100 transition-colors no-underline flex items-center gap-1"
            >
              <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
              Вход
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-md bg-black text-white text-lg font-black hover:bg-gray-800 transition-colors no-underline flex items-center gap-1"
            >
              <UserPlusIcon className="w-4 h-4" />
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
