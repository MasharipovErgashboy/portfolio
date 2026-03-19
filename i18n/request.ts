import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
const locales = ['uz', 'ru', 'en', 'jp'];

export default getRequestConfig(async ({locale}) => {
  const currentLocale = locale || 'uz';
  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});
