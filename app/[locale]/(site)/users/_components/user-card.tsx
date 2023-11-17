import { User } from '@/types'
import React from 'react'

interface UserCardProps {
   user: User,
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="p-1 bg-blue-200">
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> 
           {user.names}
        </h2>
        <p className="text-4xl font-bold text-gray-800 mb-6"> {user.age} years old</p>
      </div>
      <div className="p-4">
        <button
           className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
           Select User
        </button>
      </div>
    </div>
  )
}
