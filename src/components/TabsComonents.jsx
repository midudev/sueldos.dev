import { Tab } from '@headlessui/react'
import TabItem from './TabItem'
import TabPanelItem from './TabPanelItem'

const TabsComonents = ({ selectedIndex, features }) => {
  return (
    <>
      <div className='flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
        <Tab.List className='relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
          <TabItem features={features} selectedIndex={selectedIndex} />
        </Tab.List>
      </div>
      <Tab.Panels className='lg:col-span-7'>
        <TabPanelItem features={features} />
      </Tab.Panels>
    </>
  )
}

export default TabsComonents
