import { Tab } from '@headlessui/react'

const TabPanelItem = ({ features }) => {
  return (
    <>
      {features.map((feature) => (
        <Tab.Panel key={feature.title} unmount={false}>
          <div className='relative sm:px-6 lg:hidden'>
            <div className='absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
            <p className='relative max-w-2xl mx-auto text-base text-white sm:text-center'>
              {feature.description}
            </p>
          </div>
          <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
            <Image
              className='w-full'
              src={feature.image}
              alt=''
              priority
              sizes='(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem'
            />
          </div>
        </Tab.Panel>
      ))}
    </>
  )
}

export default TabPanelItem
