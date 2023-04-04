import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Salaries } from '@/components/Salaries'

import { readFile } from 'node:fs/promises'
import path from 'node:path'

export default function Home ({ averageSalaries, count }) {
  return (
    <>
      <Head>
        <title>sueldos.dev - Salarios en Programación en el mundo</title>
        <meta
          name='description'
          content='Descubre los salarios en el mundo de la programación y el desarrollo. Añade el tuyo de forma anónima.'
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Salaries averageSalaries={averageSalaries} count={count} />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps (context) {
  // read file from disk data/es.json
  const dataFile = path.join(process.cwd(), 'data', 'es.json')
  const data = await readFile(dataFile, 'utf8')

  return {
    props: JSON.parse(data)
  }
}
