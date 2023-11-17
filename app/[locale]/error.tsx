'use client'

import Link from "next/link";
const GlobalError = ({ error, reset }: { error: Error, reset: () => void}) => {
  return (
    <main className="flex items-center justify-center min-h-screen my-auto px-6 py-24 sm:py-32 lg:px-8 bg-gray-900">
         <div className="text-center">
            <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500">
                There was a problem
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white text-zinc-900">
                {error.message || "Something went wrong!"}
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Please try agin later or contact us
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={() => reset()}>Try agian</button>
              <Link href="/">
                 Go back home
              </Link>
            </div>
         </div>
    </main>
  )
}

export default GlobalError;
