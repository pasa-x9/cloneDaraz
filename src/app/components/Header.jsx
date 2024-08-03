"use client";
import React, { useEffect } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";
import Link from 'next/link';

function Header() {
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 40){
          document.querySelector('header').classList.add('new')
      }
      else{
          document.querySelector('header').classList.remove('new')
      }
  })

  }, []);
  return (
    <>
      <header className='bg-orange-600 text-white text-nowrap'>
        <section>
          <div className="container flex justify-between items-center text-nowrap">
            <div className='w-fit'>
              <ul className='flex gap-4 text-[6.5px] sm:text-[0.8vw] w-ful'>
              <li><a href="">Become a Seller</a></li>
              <li><a href="">Payments & Recharge</a></li>
              <li><a href=""> Help & Support</a></li>
              <li><a href="">Daraz Logistics Partner</a></li>
              </ul>
            </div>
            <div className='w-fit text-[10px] sm:text-[0.9vw]'>
              <button className='bg-[#AD3C04] rounded-b-lg p-1 w-full'><Link href='https://play.google.com/store/apps/details?spm=a2a0e.tm80335403.footer_top.android.70fd784cpNDrmV&id=com.daraz.android&scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321' target='blank'>Save More on App</Link></button>
            </div>
          </div>
        </section>
        <nav className='py-3 bg-orange-600'>
          <div className="container flex items-center justify-between">
            <div className='w-[15%] sm:w-[10%]'>
             <Link href='/'> <img src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png" alt="logo" className='w-full' /></Link>
            </div>
            <div className='w-[60%]'>
              <input type="search" placeholder='Search in Daraz' className='w-full rounded-xl bg-white px-4 py-2 text-sm text-black focus:outline-none'/>
            </div>
            <div className='w-[20%] flex items-center text-[8.8px] sm:text-[1.1vw] justify-between gap-1'>
              <span><Link href=''>{/*<IoPersonSharp className='inline-block'/>*/}Login</Link></span>
              <span>|</span>
              <span><a href=''>Sign Up</a></span>
              <span className='text-[16px] sm:text-[1.8vw]'><a href=''><TiShoppingCart /></a></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header