"use client";

import { getUsers } from "@/actions/get-users";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { UserCard } from "./user-card";
import ErrorState from "./user-error";
import {useTranslations,} from 'next-intl'

export default function ListUsers() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000,
  })
  const t = useTranslations('Index');
  return (
    <>
      <h1 className='text-8xl'>{t('title')}</h1>
      {
       <div className="bg-white w-[1000px] p-12 rounded-md">
         {data?.error && <ErrorState error={new Error("")}/> }
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {data?.users?.map((user, index) => (
              <UserCard
                key={index}
                user={user}
            />
          ))}
         </div>
      </div>
      }
    </>
  );
}