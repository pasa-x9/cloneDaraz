import React from 'react'

function page() {
    return (
        <>
            <section className='bg-slate-100'>
                <div className="container">
                    <div className='m-auto md:w-[68vw] py-16 px-8'>
                        <h1 className='lg:text-[1.6vw] text-xl my-2 h-ani'>Welcome to Daraz...</h1>
                        <form action="" className=' bg-white/30 shadow-xl w-full py-12 md:px-44 sm:px-8 px-6'>
                            <fieldset className=' flex gap-6 flex-col'>
                                <legend className='text-orange-600 font-semibold md:text-[1.4vw] my-4'>Login Into Daraz</legend>
                                <div><label className='text-xs flex py-2'>Phone Number or Email</label><input required autoFocus className='w-full px-4 py-2 text-xs sm:text-sm text-black focus:outline-none' type="text" placeholder='Please enter Phone Number or Email' /></div>
                                <div><label className='text-xs flex justify-between py-2'><div>Password*</div><div className='text-cyan-600'><a href=''>Forget Password?</a></div></label><input required className='w-full px-4 py-2 text-xs sm:text-sm text-black focus:outline-none' type="password" name="" id="" placeholder='Please Enter Your password' /></div>
                                <button type="submit" className='bg-orange-600 w-full text-center text-white p-3'>Login</button>
                                <span className='text-center text-xs m-[-6px] text-slate-500'>-- OR --</span>
                                <button type="submit" className='bg-orange-600 w-full text-center text-white p-3'>SignUp</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
