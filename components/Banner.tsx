import { useTranslations } from "next-intl";
import Link from "next/link"

const Banner = () => {
  const t = useTranslations('Index');
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
    <h1 className="text-2xl font-bold tracking-tight text-white lg:text-6xl">
       {t("heroTitle")}
    </h1>
    <p className="mt-4 text-xl text-white">
      {t("heroDescription")}
    </p>
     <Link 
       href="#"
       className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
      >
       {t("heroLink")}
      </Link>
  </div>
 )
}

export default Banner
