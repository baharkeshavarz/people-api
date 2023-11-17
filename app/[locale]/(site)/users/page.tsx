import Loader from "@/components/Loader";
import ListUsers from "./_components/users-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <Suspense fallback={<Loader/>}>
         <ListUsers />
      </Suspense>
    </div>
  );
}
