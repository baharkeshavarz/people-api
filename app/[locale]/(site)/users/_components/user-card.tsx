import { User } from '@/types'
import React from 'react'
import {useTranslations,} from 'next-intl'

interface UserCardProps {
   user: User,
}

export const UserCard = ({ user }: UserCardProps) => {
  const t = useTranslations('Index');

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-gray-300"></div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> 
           {user.names}
        </h2>
        <p className="text-2xl font-bold text-gray-800 mb-6"> 
          {user.age} {t('age')}
        </p>
      </div>
      <div className="p-4">
         <button
           className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue active:bg-indigo-800"
           >
            Select User
        </button>
      </div>
    </div>
  )
}
