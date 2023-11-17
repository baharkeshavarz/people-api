"use client"

import Button from "@/app/components/Button";
import EmptyState from "@/app/components/EmptyState";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

interface ErrorStateProps {
    error?: Error,
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter(); 
  const t = useTranslations('Index');

  // Force refresh the page
  const handleReload = () => {
    router.refresh();
 };

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
                onClick={handleReload}
            />
        </div>
     </div>
  )
}

export default ErrorState