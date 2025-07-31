'use client'

import { useState } from 'react'
import formatData from '../../test/format.json'
import commanderData from '../../test/player-points/commander.json'

// Маппинг форматов к их данным
const formatToDataMap = {
  'fmt_commander': commanderData,
  // Добавьте остальные форматы по аналогии
}

export default function PointsTablePage() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null)

  // Подготовка опций для селекта
  const formatOptions = formatData.map(format => ({
    value: format.id,
    label: format.format_name
  }))

  // Получение данных по выбранному формату
  const currentData = selectedFormat ? formatToDataMap[selectedFormat] : null

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Лидеры формата</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Селектор форматов */}
        <div className="mb-8">
          <label htmlFor="format-select" className="block text-sm font-medium text-gray-700 mb-2">
            Выберите формат
          </label>
          <select
            id="format-select"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSelectedFormat(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>Выберите формат</option>
            {formatOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Отображение содержимого */}
        {selectedFormat ? (
          currentData && currentData.top_players && currentData.top_players.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Позиция
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Игрок
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Очки
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData.top_players.map((player, index) => (
                    <tr key={player.player_id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {/* Иконки для первых трёх мест */}
                        {index === 0 && (
                          <span className="mr-2 text-yellow-500">
                            🥇
                          </span>
                        )}
                        {index === 1 && (
                          <span className="mr-2 text-slate-400">
                            🥈
                          </span>
                        )}
                        {index === 2 && (
                          <span className="mr-2 text-amber-700">
                            🥉
                          </span>
                        )}
                        {player.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {player.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">Пока что лидеров нет... Ты можешь стать первым!</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Зарегистрироваться
              </button>
            </div>
          )
        ) : (
          <p className="text-gray-700">
            Выберите формат из списка выше, чтобы увидеть таблицу лидеров
          </p>
        )}
      </div>
    </main>
  )
}
