import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-slate-200 mt-10 pt-4'>
        <div className="container grid grid-cols-2 sm:grid-cols-3">
          <div>
            <h3 className='font-bold py-2'>Customer Care</h3>
            <ul className='sm:text-[0.9vw]'>
              <li><a href="">Help Center</a></li>
              <li><a href="">How to Buy</a></li>
              <li><a href="">Returns & Refunds</a></li>
              <li><a href="">Contact Us</a></li>  
            </ul>
          </div>
          <div>
            <h3 className='font-bold py-2'>Daraz</h3>
            <ul className='sm:text-[0.9vw]'>
              <li><a href="">About Daraz</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Daraz Blog</a></li>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Digital Payments</a></li>
              <li><a href="">Daraz Customer University</a></li>
              <li><a href="">Sell on Daraz</a></li>
              <li><a href="">Code of Conduct</a></li>
            </ul>
          </div>
          <div className='flex gap-4 w-10 text-nowrap items-start py-4'>
            <img className='w-full' src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png" alt="f-icon" />
            <div>
              <h3 className='text-orange-600 font-bold'>Happy Shopping</h3>
              <ul className='text-[#0d115b]'>Download App</ul>
              <button className='sm:w-[10vw] ml-[-8px]'><a href='https://play.google.com/store/apps/details?spm=a2a0e.tm80335403.footer_top.android.70fd784cpNDrmV&id=com.daraz.android&scm=1003.4.icms-zebra-100024112-2877125.OTHER_5439623634_2540321' target='blank'><img className='w-full' src="https://www.aps.edu/students-parents/images/downloadOnTheGooglePlayStoreBadge.png/image" alt="app" /></a></button>
            </div>
          </div>
        </div>
        <section className='text-center text-white bg-orange-600 mt-10 p-8 sm:p-2'>© Daraz 2024</section>
      </footer>
    </>
  )
}

export default Footer
