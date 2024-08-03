"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from 'react-icons/ti';
import { InfinitySpin } from 'react-loader-spinner';

function Sale() {
    let [products,setProducts]=useState([]);
    let [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products`)
      .then(res=> res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
    },[])
  
    if (loading) {
      return (
     <div className="flex min-h-screen justify-center items-center">
          <InfinitySpin
      visible={true}
      width="200"
      color="#EA580C"
      ariaLabel="infinity-spin-loading"
      />
     </div>
      )
    }
  return (
    <>
       <section className="py-4">
     <h1 className="container sm:text-2xl text-xl font-bold my-6">Flash Sale</h1>
      <div className='container shadow-2xl outline outline-1 outline-slate-100 card sm:rounded-none rounded-xl'>
        <h2 className='p-4 text-orange-600 sm:text-base text-xs font-[600] border-b-[1px]'>On Sale Now</h2>
          <div className="grid sm:grid-cols-4 md:grid-cols-6 grid-cols-2 gap-2 py-4">
            {products.slice(0,6).map((a)=>(
              <div className=" p-2 sm:h-fit text-nowrap hover:shadow-2xl hover:outline outline-1 outline-slate-200">
                <Link href={`/details/${a.id}`}>
              <img className="sm:h-[26vh] h-[18vh]" src='https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'  alt='products' />
              <h2 className="my-2"><span className="">{a.title}</span></h2>
                </Link>
              <div className="flex flex-col gap-2 py-2">
                <div className="sm:text-[0.94vw] text-[2.6vw]">Price: ${a.price}</div>
                <div className="sm:text-[0.94vw] text-[2.6vw]">Rating: {a.rating.rate}<span className="text-yellow-500 inline">★</span></div>
                <button className="w-fit sm:text-[1vw] text-[3.2vw] bg-orange-600 text-white rounded-sm hover:bg-slate-800 hover:scale-[1.04] p-1 px-2" aria-label="Order now">Order Now <TiShoppingCart className="inline-flex"/></button>
              </div>
            </div>
            ))}
          </div>
      </div>
     </section>
    </>
  )
}

export default Sale
