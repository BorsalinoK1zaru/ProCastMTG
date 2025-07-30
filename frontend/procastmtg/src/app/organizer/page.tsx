'use client'

import { useState } from 'react'
import Select from 'react-select'
import formatData from '../../test/format.json'
import cityData from '../../test/cityes.json'
import usersData from '../../test/users.json'
import gameClubs from '../../test/game_club.json' // ← Новый импорт

// Типы для реакт-селекта
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderColor: '#cbd5e1',
    borderRadius: '0.375rem',
    padding: '0.5rem',
    marginBottom: '1rem',
    minHeight: 'auto',
    '&:hover': {
      borderColor: '#a855f7'
    }
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: '#f3f4f6',
    borderRadius: '0.375rem',
    marginBottom: '0.25rem',
    display: 'block'
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: '#1f2937'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#f8fafc' : 'white',
    color: '#1f2937'
  })
}

export default function OrganizerPage() {
  const [formData, setFormData] = useState({
    format: '',
    city: '',
    participants: [] as string[],
    date: '',
    pairing: 'random',
    store: '' // ← Новое поле
  })

  const [error, setError] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  // Подготовка опций
  const formatOptions = formatData.map(item => ({
    value: item.id,
    label: item.format_name
  }))

  const cityOptions = cityData.map(item => ({
    value: item.id,
    label: item.name
  }))

  const userOptions = usersData.map(user => ({
    value: user.id,
    label: user.username
  }))

  const clubOptions = gameClubs.map(club => ({
    value: club.id,
    label: club.club_name
  }))

  // Обработчики
  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleParticipantsChange = (selected: any) => {
    if (selected) {
      setFormData(prev => ({
        ...prev,
        participants: selected.map((item: any) => item.value)
      }))
    }
  }

  const handleStoreChange = (selected: any) => {
    if (selected) {
      setFormData(prev => ({ ...prev, store: selected.value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.format || !formData.city || formData.participants.length < 2 || !formData.date || !formData.store) {
      setError('Заполните все обязательные поля')
      return
    }

    setError('')
    console.log('Отправляем данные:', JSON.stringify(formData, null, 2))
    alert('Данные успешно отправлены!')
  }

  return (
    <main className="min-h-screen p-8 bg-blue-50">
      <h1 className="text-4xl font-sans text-center text-purple-800 mb-8">Создать турнир</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Формат */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Формат турнира
            </label>
            <Select
              options={formatOptions}
              onChange={(selected) => setFormData(prev => ({ ...prev, format: selected?.value || '' }))}
              placeholder="Выберите формат..."
              styles={customStyles}
              required
            />
          </div>

          {/* Город */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Город проведения
            </label>
            <Select
              options={cityOptions}
              onChange={(selected) => setFormData(prev => ({ ...prev, city: selected?.value || '' }))}
              placeholder="Выберите город..."
              styles={customStyles}
              required
            />
          </div>

          {/* Магазин */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Место проведения
            </label>
            <Select
              options={clubOptions}
              onChange={handleStoreChange}
              placeholder="Выберите магазин..."
              styles={customStyles}
              required
            />
          </div>

          {/* Участники */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Участники
            </label>
            <Select
              isMulti
              options={userOptions}
              value={formData.participants.map(participant => 
                userOptions.find(u => u.value === participant)
              )}
              onChange={handleParticipantsChange}
              placeholder="Начните вводить имя игрока..."
              styles={customStyles}
              required
              menuIsOpen={menuIsOpen}
              onInputChange={(inputValue) => {
                if (inputValue.length > 0) {
                  setMenuIsOpen(true)
                } else {
                  setMenuIsOpen(false)
                }
              }}
            />
            {formData.participants.length < 2 && (
              <p className="mt-1 text-sm text-yellow-600">
                Минимум 2 участника
              </p>
            )}
          </div>

          {/* Дата */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Дата проведения
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={handleChange('date')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Паринг */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Тип паринга
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="pairing"
                  value="random"
                  checked={formData.pairing === 'random'}
                  onChange={(e) => setFormData(prev => ({ ...prev, pairing: e.target.value }))}
                  className="mr-2"
                />
                Полный рандом
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="pairing"
                  value="swiss"
                  checked={formData.pairing === 'swiss'}
                  onChange={(e) => setFormData(prev => ({ ...prev, pairing: e.target.value }))}
                  className="mr-2"
                />
                Швейцарская сетка
              </label>
            </div>
          </div>

          {/* Ошибки */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Кнопка */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Создать турнир
          </button>
        </form>
      </div>
    </main>
  )
}
