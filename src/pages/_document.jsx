import { Head, Html, Main, NextScript } from 'next/document'

export default function Document (props) {
  // const pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang='en'
    >
      <Head />
      <body className='flex flex-col h-full bg-white text-slate-950 dark:text-white dark:bg-slate-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
