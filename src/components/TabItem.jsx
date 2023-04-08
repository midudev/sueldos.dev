import clsx from 'clsx'
import { Tab } from '@headlessui/react'

const TabItem = ({ features, selectedIndex }) => {
  return (
    <>
      {features.map((feature, featureIndex) => (
        <div
          key={feature.title}
          className={clsx(
            'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
            selectedIndex === featureIndex
              ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
              : 'hover:bg-white/10 lg:hover:bg-white/5'
          )}
        >
          <h3>
            <Tab
              className={clsx(
                'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                selectedIndex === featureIndex
                  ? 'text-blue-600 lg:text-white'
                  : 'text-blue-100 hover:text-white lg:text-white'
              )}
            >
              <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl' />
              {feature.title}
            </Tab>
          </h3>
          <p
            className={clsx(
              'mt-2 hidden text-sm lg:block',
              selectedIndex === featureIndex
                ? 'text-white'
                : 'text-blue-100 group-hover:text-white'
            )}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </>
  )
}

export default TabItem
