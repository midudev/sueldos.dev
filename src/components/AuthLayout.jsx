import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'

export function AuthLayout ({ children }) {
  return (
    <>
      <div className='relative flex justify-center min-h-full md:px-12 lg:px-0'>
        <div className='relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl sm:justify-center md:flex-none md:px-28'>
          <div className='w-full max-w-md mx-auto sm:px-4 md:w-96 md:max-w-sm md:px-0'>
            {children}
          </div>
        </div>
        <div className='hidden sm:contents lg:relative lg:block lg:flex-1'>
          <Image
            className='absolute inset-0 object-cover w-full h-full'
            src={backgroundImage}
            alt=''
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
