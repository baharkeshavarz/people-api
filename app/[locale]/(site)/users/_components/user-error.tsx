"use client"

import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

interface ErrorStateProps {
    error?: Error,
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter(); 
  const t = useTranslations('Index');

  useEffect(() => {
    // Do sth like logging
     console.log(error);
  }, [error]);

  return (
     <div className="flex flex-col justify-center items-center gap-3">
        <EmptyState
          title="Oh Oh"
          subtitle={t('errorMsg')}
        />
        <div className="w-48">
             <Button 
                label={t("load")}
                outline
                onClick={() => router.push("/users")}
            />
        </div>
     </div>
  )
}

export default ErrorState