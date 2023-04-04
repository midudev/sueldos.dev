import 'focus-visible'
import '@/styles/tailwind.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script
        defer
        src='https://unpkg.com/@tinybirdco/flock.js'
        data-host='https://api.tinybird.co'
        data-token='p.eyJ1IjogIjczODcxZDExLWQ0ZWEtNDIzMC1hODZlLWM0YzdjYjEyNDAwMyIsICJpZCI6ICIzYzM0ZTE0YS1jNDg0LTQwYzItODQ1Zi0wNDUwMTU2MzhjODEifQ.WLZ6AitII_fxGjsythl_dsSOqZzQw6VIXcOPdC_kE2I'
      />
    </>
  )
}
