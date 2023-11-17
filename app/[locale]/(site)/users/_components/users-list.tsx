"use client";

import { getUsers } from "@/actions/get-users";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { UserCard } from "./user-card";
import ErrorState from "./user-error";
import {useTranslations,} from 'next-intl'
import { HiArrowRightCircle } from "react-icons/hi2";

export default function UsersList() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 5,
  })
  const t = useTranslations('Index');
  return (
    <div className="flex flex-col w-full px-12">
      <div className="border-b py-1 flex items-center">
           <HiArrowRightCircle className="w-6 h-6" />
          <p className="text-grey-800 font-bold text-xl">
            { t('Users List') }
          </p>
      </div>
      <div className="bg-white w-full rounded-md pt-4">
          {data?.error && <ErrorState/> }
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {data?.users?.map((user, index) => (
              <UserCard
                 key={index}
                 user={user}
            />
          ))}
         </div>
      </div>
    </div>
  );
}
