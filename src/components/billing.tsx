import React, { FC } from 'react'
import { apple, bill, google } from '../assets';
import { layout, styles } from '../util/style'

const Billing: FC = (): JSX.Element => {
  return (
    <section id='features' className={`${layout.sectionReverse} gap-10 `}>
      <div className={layout.sectionImageRevarse}>
        <img src={bill} alt='Bill' className='w-[100%] h-[100%] relative z-[5] rounded-[400px]'/>

        <div className='absolute z-[3] -left-1/2  w-[50%] h-[50%] rounded-full top-0 white__gradient' />
          <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient' />
      </div>
      <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Hisob-kitob va faktorial <br className='sm:block hidden'/> osongina boshqaring
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus labore porro reiciendis odit quam cupiditate pariatur at ex quod.
      </p>
      <div className='flex flex-row flex-wrap sm:mt-7 mt-6'>
           <img src={google} alt="google" className='w-[90px] h-[65px] object-contain mr-5 cursor-pointer' />
           <img src={apple} alt="apple" className='h-[65px] object-contain mr-5 cursor-pointer' />
      </div>
      </div>
    </section>
    );
};

export default Billing