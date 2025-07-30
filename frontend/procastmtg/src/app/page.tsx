import data from '../test/test.json'

export default function TournamentsPage() {
  console.log("Loaded data:", data); // Проверка данных

  // Функция для получения первого абзаца
  const getFirstParagraph = (text: string): string => {
    if (!text) return ''
    
    // Разделяем текст по двойным пробелам или символам перевода строки
    const paragraphs = text.split(/\n\s*\n|\r?\n\r?/).filter(Boolean)
    
    // Возвращаем первый абзац (или весь текст, если абзацев нет)
    return paragraphs.length > 0 ? paragraphs[0] : text
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Новости</h1>
      
      <div className="space-y-6">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-3xl mx-auto"
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
              {getFirstParagraph(item.publication_text)}
            </p>

            {/* Дата */}
            <span className="text-xs text-gray-500 block text-right">
              {new Date(item.publication_date).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
