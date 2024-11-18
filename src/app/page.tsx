'use client';
import img1 from '../../public/img.png';
import { useEffect } from 'react'
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import About from './(Auth)/about/page';
import Projects from './(Auth)/projects/page';
import Skills from './(Auth)/skills/page';
import Head  from 'next/head';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
export default function Home(){
  useEffect(() => { AOS.init({ duration: 500, 
    });
    }, []);
  return ( 
    <div>
      <Head> <title>Izma Portfolio</title> <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> </Head>
    {/* home start */}

    <div className="custom-xl:flex custom-xl:gap-[28px] custom-xl:my-[95px] custom-xl:mx-[60px] custom-xl:items-center          custom-lg:flex custom-lg:gap-[28px] custom-lg:my-[95px] custom-lg:mx-[60px] custom-lg:items-center          custom-md:flex custom-md:gap-[40px] custom-md:my-[95px]  custom-md:mx-[70px] custom-md:items-center     custom-sm:flex custom-sm:gap-[40px] custom-sm:my-[95px] custom-sm:mx-[70px] custom-sm:items-center      custom-xs:justify-center custom-xs:block custom-xs:my-[95px] custom-xs:mx-[70px] custom-xs:items-center          custom-xxs:justify-center custom-xxs:block custom-xxs:my-[80px] custom-xxs:mx-[40px] custom-xxs:items-center       custom-tiny:justify-center custom-tiny:block custom-tiny:my-[80px] custom-tiny:mx-[30px] custom-tiny:items-center    custom-mini:justify-center  custom-mini:block custom-mini:my-[80px] custom-mini:mx-[20px] custom-mini:items-center" data-aos="fade-up">
      <div className="text-white">
        <h1 className='mb-3 font-bold custom-xl:text-[32px]     custom-lg:text-[32px]   custom-md:text-[28px] custom-sm:text-[25px]      custom-xs:text-[25px]      custom-xxs:text-[24px]    custom-tiny:text-[24px]  custom-mini:text-[24px]' data-aos="fade-up">Hey, I&apos;m <span className='text-[#cab7f9]'>Izma</span> </h1>
        <h2 className='mb-3 font-bold custom-xl:text-[24px]  custom-lg:text-[24px]    custom-md:text-[24px]    custom-sm:text-[21px]      custom-xs:text-[21px]     custom-xxs:text-[19px]    custom-tiny:text-[18px]   custom-mini:text-[18px]' data-aos="fade-up">Full Stack Devolper</h2>
        <p className='mb-3 custom-xl:text-[16px] leading-tight custom-xl:max-w-[800px] custom-lg:max-w-[800px] custom-lg:text-[14px]    custom-md:text-[14px] custom-md:max-w-[600px]    custom-sm:text-[14px] custom-sm:max-w-[400px]        custom-xs:text-[13px] custom-xs:max-w-[600px]        custom-xxs:text-[13px] custom-xxs:max-w-[400px]        custom-tiny:text-[12px] custom-tiny:max-w-[350px]   custom-mini:text-[12px] custom-mini:max-w-[350px] ' data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque autem, quod quidem delectus suscipit asperiores quibusdam ad quia minima mollitia expedita blan asumenda fugat doloribs animi posimus illo dolorem, tempora ullam dolore Nesiunt, sequi.</p>
        <div data-aos="fade-up">
          <div>
            <button className='bg-[#ad6bf1] font-[540] text-[12px] h-7 rounded-[5px] border-[#ad6bf1] text-white custom-xl:py-[6px] custom-xl:px-0 custom-xl:mt-[10px] custom-xl:mb-[25px] custom-xl:w-[100px]          custom-lg:py-[6px] custom-lg:px-0 custom-lg:mt-[10px] custom-lg:mb-[25px] custom-lg:w-[100px]           custom-md:py-[7px] custom-md:px-0 custom-md:mt-[9px] custom-md:mb-[20px] custom-md:w-[100px]     custom-sm:py-[7px] custom-sm:px-0 custom-sm:mt-[9px] custom-sm:mb-[20px] custom-sm:w-[100px]          custom-xs:py-[7px] custom-xs:px-0 custom-xs:mt-[9px] custom-xs:mb-[20px] custom-xs:w-[100px]         custom-xxs:py-[7px] custom-xxs:mx-0 custom-xxs:mt-[7px] custom-xxs:mb-[18px] custom-xxs:w-[90px] custom-xxs:text-[12px]           custom-tiny:py-[7px] custom-tiny:px-0      custom-tiny:mt-[7px] custom-tiny:mb-[18px] custom-tiny:w-[90px] custom-tiny:text-[12px]        custom-mini:py-[7px] custom-mini:px-0  custom-mini:mt-[7px] custom-mini:mb-[18px] custom-mini:w-[90px] custom-mini:text-[12px]'>View My Work</button>
          </div>
          <div className='flex'>
            <Link href={'https://www.linkedin.com/in/izma-ikhlaque-42a54329b/'}>
            <FaLinkedin className='custom-xl:mr-[25px]   custom-lg:mr-[25px]   custom-md:mr-[25px]    custom-sm:mr-[25px]     custom-xs:mr-[15px]   custom-xxs:mr-[15px] custom-tiny:mr-[12px]    custom-mini:mr-[12px] ' size={22} color='#c7b1e0'/>
            </Link>
            <Link href={'https://github.com/IzmaRao'}>
            <FaGithub className='custom-xl:mr-[25px]     custom-lg:mr-[25px]    custom-md:mr-[25px]   custom-sm:mr-[25px]    custom-xs:mr-[15px]    custom-xxs:mr-[15px]     custom-tiny:mr-[12px]  custom-mini:mr-[12px]'   size={22} color='#c7b1e0'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='custom-xl:mt-0 custom-lg:mt-0 custom-md:mt-0 custom-sm:mt-0 custom-xs:mt-[50px] custom-xs:justify-items-center  custom-xxs:mt-[50px] custom-xxs:justify-items-center   custom-tiny:mt-[30px] custom-tiny:justify-items-center    custom-mini:mt-[30px] custom-mini:justify-items-center'>
        <Image data-aos="fade-up" className='home-my-img' alt="my img" src={img1} height={320} width={290} />
      </div>
  </div>
  {/* home end */}

  {/* about start */}
  <About/>
  {/* about end */}

  {/* projects start */}
  <Projects/>

  {/* projects end */}

  {/* skills start */}
  <Skills/>
  {/* skills end */}
  <Script id='scri1' src="https://unpkg.com/aos@next/dist/aos.css"></Script>
  <Script id='scri2'>AOS.init()</Script>

  </div>
  )
}

// #341666