'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  // Проверка активного пути для подсветки кнопок
  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип и название */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative bg-white rounded-full">
              <Image
                src="/logo.png"
                alt="Логотип"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-xl font-bold">Турнирная система</span>
          </div>

          {/* Основная навигация - всегда видимая */}
          <nav className="flex space-x-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}
            >
              Турниры
            </Link>
            <Link
              href="/points-table"
              className={`px-4 py-2 rounded-lg ${isActive('/points-table') ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}
            >
              Таблица по очкам
            </Link>
            <Link
              href="/organizer"
              className={`px-4 py-2 rounded-lg ${isActive('/organizer') ? 'bg-blue-700' : 'hover:bg-blue-700'} transition-colors`}
            >
              Организаторам
            </Link>
          </nav>

          {/* Кнопки авторизации */}
          <div className="flex space-x-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-800 transition-colors"
            >
              Вход
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-lg bg-white text-blue-800 hover:bg-blue-100 transition-colors"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}