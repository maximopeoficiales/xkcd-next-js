import "../styles/globals.css"
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { I18NProvider, useI18N } from "@/ui/context/i18n";
import Head from "next/head";


const MyTitle = () => {
  const { t } = useI18N();
  return (
    <Head>
      <title>{t("SEO_DEFAULT_TITLE")}</title>
    </Head>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <I18NProvider>
        <MyTitle />
        <Component {...pageProps} />
      </I18NProvider>
    </NextUIProvider>

  )
}

export default MyApp
