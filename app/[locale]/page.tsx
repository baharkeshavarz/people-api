import {useTranslations,} from 'next-intl'

export default function Home() { 
 const t = useTranslations('Index');
 return (
    <div className='w-full h-screen bg-orange-500 text-black flex flex-col justify-center items-center'>
       <h1 className='text-8xl'>{t('title')}</h1>
       <label htmlFor="language" className='text-2xl mt-2'>{t('select')}</label>
    </div>
 );
}