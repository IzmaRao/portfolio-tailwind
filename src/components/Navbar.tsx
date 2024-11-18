import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-[#1A0B2E] flex py-1 px-[40px] custom-xl:flex custom-xl:h-[55px] custom-xl:w-auto custom-xl:items-center custom-xl:justify-between            custom-lg:py-1 custom-lg:px-[40px] custom-lg:flex custom-lg:h-[55px] custom-lg:w-auto custom-lg:items-center custom-lg:justify-between                 custom-md:py-1 custom-md:px-[40px] custom-md:flex custom-md:h-[55px] custom-md:w-auto custom-md:items-center custom-md:justify-between   custom-sm:py-1 custom-sm:px-[40px] custom-sm:flex custom-sm:h-[55px] custom-sm:w-auto custom-sm:items-center custom-sm:justify-between    custom-xs:py-1 custom-xs:px-[40px] custom-xs:flex custom-xs:h-[55px] custom-xs:w-auto custom-xs:items-center custom-xs:justify-between   custom-xxs:py-1 custom-xxs:px-[40px] custom-xxs:flex custom-xxs:h-[55px] custom-xxs:w-auto custom-xxs:items-center custom-xxs:justify-between   custom-tiny:py-1 custom-tiny:px-[30px] custom-tiny:flex custom-tiny:h-[55px] custom-tiny:w-auto custom-tiny:items-center custom-tiny:justify-between custom-mini:py-0 custom-mini:px-[20px] custom-mini:flex custom-mini:h-[55px] custom-mini:w-auto custom-mini:items-center custom-mini:justify-between'>
        <div className='text-white   custom-xl:font-bolder custom-xl:text-[1.5em]   custom-lg:font-bolder custom-lg:text-[1.5em] custom-md:text-[16px] custom-sm:text-[16px] custom-xs:text-[16px]    custom-xxs:text-[14px] custom-tiny:text-[14px] custom-mini:text-[14px]'>
          <h2 className='font-bold text-[24px]'>Izma</h2>
        </div>
        <ul className='text-white custom-xl:font-[14px] custom-xl:gap-[20px] custom-xl:list-none custom-xl:flex             custom-lg:text-[14px] custom-lg:gap-[20px] custom-lg:list-none custom-lg:flex custom-md:text-[13px] custom-md:gap-[18px] custom-md:flex custom-md:list-none      custom-sm:text-[13px] custom-sm:gap-[18px] custom-sm:list-none custom-sm:flex  custom-xs:text-[13px] custom-xs:gap-[18px] custom-xs:list-none custom-xs:flex    custom-xxs:text-[12px] custom-xxs:gap-[13px] custom-xxs:list-none custom-xxs:flex   custom-tiny:text-[11.50px] custom-tiny:gap-[11px] custom-tiny:list-none custom-tiny:flex custom-mini:text-[11px] custom-mini:gap-[11px] custom-mini:list-none custom-mini:flex'>
          <Link href="./"><li>Home</li></Link>
          <Link href="./about"><li>About</li></Link>
          <Link href="./projects"><li>Projects</li></Link>
          <Link href="./skills"><li>Skills</li></Link>
          <Link href="#footerr"><li>Contact</li></Link>
        </ul>
    </nav>
  )
}
export default Navbar;
