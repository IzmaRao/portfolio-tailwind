import Link from 'next/link';
import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <div data-aos="fade-up" id="footerr" className="text-white bg-[#11071F] custom-xl:pt-[80px] custom-xl:pb-[50px] custom-xl:pl-[50px] custom-xl:pr-[20px] custom-xl:text-left custom-xl:max-w-[900px] custom-xl:min-w-[200px]              custom-lg:pt-[80px] custom-lg:pb-[50px] custom-lg:pl-[50px] custom-lg:pr-[20px] custom-lg:text-white custom-lg:text-left custom-lg:min-w-[200px] custom-lg:max-w-[900px]           custom-md:pt-[80px] custom-md:pb-[100px] custom-md:pl-[50px] custom-md:pr-[20px] custom-md:text-left custom-md:min-w-[200px] custom-md:max-w-[900px]        custom-sm:py-[80px]  custom-sm:pl-[50px] custom-sm:pr-[20px] custom-sm:text-left custom-sm:min-w-[200px] custom-sm:max-w-[900px]         custom-xs:py-[80px] custom-xs:pl-[50px] custom-xs:pr-[20px] custom-xs:text-left custom-xs:min-w-[200px] custom-xs:max-w-[900px]   custom-xxs:py-[70px] custom-xxs:pl-[20px] custom-xxs:pr-[15px] custom-xxs:text-left custom-xxs:min-w-[200px] custom-xxs:max-w-[400px]        custom-tiny:py-[70px] custom-tiny:pl-[20px] custom-tiny:pr-[15px] custom-tiny:text-left custom-tiny:min-w-[200px] custom-tiny:max-w-[400px]        custom-mini:py-[70px] custom-mini:pl-[20px] custom-mini:pr-[15px] custom-mini:text-left custom-mini:min-w-[200px] custom-mini:max-w-[300px] ">
        <h2 data-aos="fade-up" className='custom-xl:text-[26px] custom-xl:font-[50] custom-xl:mb-[60px]          custom-lg:text-[25px] custom-lg:font-[50] custom-lg:mb-[60px]          custom-md:text-[24px] custom-md:font-[50] custom-md:mb-[40px]           custom-sm:text-[24px] custom-sm:font-[10] custom-sm:mb-[40px]       custom-xxs:text-[26px] custom-xxs:font-[10] custom-xxs:mb-[40px]    custom-tiny:text-[26px] custom-tiny:font-[50] custom-tiny:mb-[40px]   custom-mini:text-[26px] custom-mini:fontt-[50] custom-mini:mb-[40px]       custom-xs:text-[24px] custom-xs:font-[50] custom-xs:mb-[40px]'>Contact</h2>
        <p data-aos="fade-up" className='custom-xl:mb-[30px] font-[10]  custom-lg:mb-[30px]          custom-md:text-[16px] custom-md:mb-[30px] custom-md:font-[10]       custom-sm:text-[16px] custom-sm:mb-[30px] custom-sm:font-[10]              custom-xxs:text-[15px] custom-xxs:mb-[30px] custom-xxs:font-[10]      custom-tiny:text-[15px] custom-tiny:mb-[30px] custom-tiny:font-[10]     custom-mini:text-[15px] custom-mini:mb-[30px] custom-mini:font-[10]      custom-xs:text-[16px] custom-xs:mb-[30px] custom-xs:font-[10]'>
        I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives
        through accessible design. or have a project in mind? Let&apos;s connect.
        </p>
        <p data-aos="fade-up" className='custom-xl:mb-[30px] font-[10]  custom-lg:mb-[30px]          custom-md:text-[16px] custom-md:mb-[30px] custom-md:font-[10]       custom-sm:text-[16px] custom-sm:mb-[30px] custom-sm:font-[10]                 custom-xxs:text-[15px] custom-xxs:mb-[30px] custom-xxs:font-[10]      custom-tiny:text-[15px] custom-tiny:mb-[30px] custom-tiny:font-[10]     custom-mini:text-[15px] custom-mini:mb-[30px] custom-mini:font-[10]       custom-xs:text-[16px] custom-xs:mb-[30px] custom-xs:font-[10]      '>izmarao99@gmail.com</p>
        <div className='icons  flex'>
        <Link href={'https://www.linkedin.com/in/izma-ikhlaque-42a54329b/'}>
            <FaLinkedin className='custom-xl:mr-[20px]   custom-lg:mr-[20px]     custom-md:mr-[20px]      custom-sm:mr-[20px]    custom-xs:mr-[20px]    custom-xxs:mr-[15px]  custom-tiny:mr-[15px] custom-mini:mr-[15px]  ' size={24}/>
        </Link>
        <Link href={'https://github.com/IzmaRao'}>
            <FaGithub className='custom-xl:mr-[20px]   custom-lg:mr-[20px]     custom-md:mr-[20px]      custom-sm:mr-[20px]    custom-xs:mr-[20px]    custom-xxs:mr-[15px]  custom-tiny:mr-[15px] custom-mini:mr-[15px]' size={24}/>
        </Link>
        </div>
    </div>
  )
}

export default Footer;
