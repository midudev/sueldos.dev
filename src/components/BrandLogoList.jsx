import AdevintaLogo from '@/images/logos/adevinta.webp'
import GlobantLogo from '@/images/logos/globant.webp'
import NttDataLogo from '@/images/logos/nttdata.webp'
import OracleLogo from '@/images/logos/oracle.webp'
import Stratesys from '@/images/logos/stratesys.webp'
import Image from 'next/image'

const BRAND_LOGOS = [
  [
    { name: 'Adevinta', logo: AdevintaLogo },
    { name: 'Stratesys', logo: Stratesys },
    { name: 'Globant', logo: GlobantLogo }
  ],
  [
    { name: 'Oracle', logo: OracleLogo },
    { name: 'NTT Data', logo: NttDataLogo }
  ]
]

const BrandLogoList = () => {
  return (
    <ul
      role='list'
      className='flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0'
    >
      {BRAND_LOGOS.map((group, groupIndex) => (
        <li key={groupIndex}>
          <ul
            role='list'
            className='flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0'
          >
            {group.map((company) => (
              <li key={company.name} className='flex'>
                <Image className='opacity-50 invert' width={100} src={company.logo} alt={company.name} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default BrandLogoList
