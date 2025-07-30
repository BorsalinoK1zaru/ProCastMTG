import { notFound } from 'next/navigation'
import data from '../../../test/test.json'
import { Montserrat, Lora } from 'next/font/google'

// Импорт шрифтов
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700']
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700']
})

interface Params {
  params: {
    id: string
  }
}

export default function NewsDetail({ params }: Params) {
  const item = data.find(news => news.id === params.id)

  if (!item) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Основной контейнер */}
      <div className={`${montserrat.variable} ${lora.variable}`}>
        
        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-blue-800 mb-6 font-montserrat">
          {item.title}
        </h1>

        {/* Автор и дата */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600 italic font-lora">Author: {item.author}</p>
          <p className="text-sm text-gray-500 font-lora">
            {new Date(item.publication_date).toLocaleDateString()}
          </p>
        </div>

        {/* Фото */}
        <div className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden mb-8">
          <img 
            src={item.photo_link} 
            alt={item.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Полный текст */}
        <div className="prose prose-blue max-w-none font-lora text-gray-700 leading-relaxed">
          <p>{item.publication_text}</p>
        </div>
      </div>
    </div>
  )
}
