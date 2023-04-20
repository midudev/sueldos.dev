import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Salaries } from '@/components/Salaries'

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { APISection } from '@/components/APISection'

export default function Home ({ averageSalaries, count }) {
  return (
    <>
      <Head>
        <title>sueldos.dev - Salarios en Programación en el mundo</title>
        <meta
          name='description'
          content='Descubre los salarios en el mundo de la programación y el desarrollo. Añade el tuyo de forma anónima.'
        />
        <meta name='description' content='Descubre los salarios en el mundo de la programación y el desarrollo. Añade el tuyo de forma anónima.' />
        <meta property='og:title' content='Salarios en Programación en el mundo' />
        <meta property='og:description' content='Descubre los salarios en el mundo de la programación y el desarrollo. Añade el tuyo de forma anónima.' />
        <meta property='og:image' content='https://sueldos.dev/og.png' />
        <meta property='og:url' content='https://sueldos.dev' />
        <meta property='og:site_name' content='Sueldos.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@midudev' />
        <meta name='twitter:title' content='Salarios en Programación en el mundo' />
        <meta name='twitter:description' content='Descubre los salarios en el mundo de la programación y el desarrollo. Añade el tuyo de forma anónima.' />
      </Head>
      <Header />
      <main>
        <Hero />
        <Salaries averageSalaries={averageSalaries} count={count} />
        <APISection />
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
