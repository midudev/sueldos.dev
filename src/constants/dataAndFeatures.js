import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import { ArgentinaFlag, ColombiaFlag, MexicoFlag, SpainFlag, ChileFlag } from '@/components/Flags'

export const LIST_OF_CONTRIES = [
  'España', 'Colombia', 'Mexico', 'Argentina', 'Chile'
]

export const SELECTED_COUNTRIES_STATS = {
  España: {
    name: 'España',
    flag: <SpainFlag />
  },
  Colombia: {
    name: 'Colombia',
    flag: <ColombiaFlag />
  },
  Mexico: {
    name: 'Mexico',
    flag: <MexicoFlag />
  },
  Argentina: {
    name: 'Argentina',
    flag: <ArgentinaFlag />
  },
  Chile: {
    name: 'Chile',
    flag: <ChileFlag />
  }
}

export const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting
  }
]

export const data = {
  title: 'Felicidad por su salario',
  metric: 65,
  subCategoryPercentageValues: [20, 20, 20, 20, 20],
  subCategroyColors: ['red', 'orange', 'yellow', 'lime', 'green'],
  subCategoryTitles: []
}

export const averageSalaryOn2022 = 25165.51 // Estimated data retrieved from https://www.enterat.com/actualidad/salario-medio-espana.php
