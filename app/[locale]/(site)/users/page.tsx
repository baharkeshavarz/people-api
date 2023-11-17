import Loader from "@/components/Loader";
import ListUsers from "./_components/users-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="w-full flex items-center justify-center">
      <Suspense fallback={<Loader/>}>
         <ListUsers />
      </Suspense>
    </div>
  );
}
