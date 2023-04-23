import { Head, Html, Main, NextScript } from 'next/document'

const themeScriptHtml = `
(function () {
  const storageKey = 'sueldosdev-theme'
  const darkTheme = 'dark'
  const lightTheme = 'light'
  const prefersDarkTheme =
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedTheme = window.localStorage.getItem(storageKey)

  function setTheme(isDarkTheme) {
    document.documentElement.classList.add(isDarkTheme ? darkTheme : lightTheme)
    document.documentElement.classList.remove(
      isDarkTheme ? lightTheme : darkTheme,
    )
  }

  if (storedTheme !== null) {
    setTheme(storedTheme === darkTheme)
  } else {
    setTheme(prefersDarkTheme)
    window.localStorage.setItem(
      storageKey,
      prefersDarkTheme ? darkTheme : lightTheme,
    )
  }
})()
`

export default function Document (props) {
  // const pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang='en'
    >
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScriptHtml }} key='theme' id='theme' />
      </Head>
      <body className='flex flex-col h-full bg-white dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
