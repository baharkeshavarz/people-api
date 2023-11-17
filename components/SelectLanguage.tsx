"use client"

import { usePathname, useRouter } from "next/navigation";
import {useLocale, useTranslations} from 'next-intl'
import { useTransition } from 'react';

const SelectLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale()
    const t = useTranslations('Index');

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {
      const lang = e.target.value;
      const url = pathname.replace(locale, lang)
      startTransition(() => {
        router.push(url)
      });
    }

  return (
    <>
     <select 
              name="language" 
              id="language" 
              defaultValue={locale}
              onChange={handleSelect} 
              className="bg-black text-white rounded py-1 px-2 outline-none"
          >
            {['en', 'fr'].map((cur) => (
               <option key={cur} value={cur}>
              {t('locale', {locale: cur})}
            </option>
          ))}
    </select>
    </>
  )
}

export default SelectLanguage;