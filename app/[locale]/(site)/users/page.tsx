import Loader from "@/app/components/Loader";
import ListUsers from "./_components/users-list";
import { Suspense } from "react";

const Page = async () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Suspense fallback={<Loader/>}>
         <ListUsers />
      </Suspense>
    </div>
  );
}
export default Page;
