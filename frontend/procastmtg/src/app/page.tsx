import Link from 'next/link'
import data from '../test/test.json'

export default function TournamentsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Турниры</h1>
      
      <div className="space-y-6">
        {data.map((item) => (
          <Link 
            key={item.id} 
            href={`/news/${item.id}`} // Переход по ID
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-3xl mx-auto block"
          >
            {/* Заголовок */}
            <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>

            {/* Автор */}
            <p className="text-sm text-gray-600 mb-5">Author: {item.author}</p>

            {/* Фото (без обрезания) */}
            <div className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden mb-5">
              <img 
                src={item.photo_link} 
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Первый абзац текста */}
            <p className="text-gray-700 leading-relaxed mb-3">
              {item.publication_text.split(/\n\s*\n/)[0]}
            </p>

            {/* Дата */}
            <span className="text-xs text-gray-500 block text-right">
              {new Date(item.publication_date).toLocaleDateString()}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
