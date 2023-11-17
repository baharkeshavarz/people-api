"use client"

import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

interface ErrorStateProps {
    error?: Error,
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter(); 
  useEffect(() => {
    // Do sth like logging
     console.log(error);
  }, [error]);

  return (
     <div className="flex flex-col justify-center items-center gap-3">
        <EmptyState
          title="Oh Oh"
          subtitle="Something went wrong!"
        />
        <div className="w-48">
             <Button 
                label="Load again"
                outline
                onClick={() => router.push("/users")}
            />
        </div>
     </div>
  )
}

export default ErrorState