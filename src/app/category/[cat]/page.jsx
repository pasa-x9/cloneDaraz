"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";

function page({params}) {
    let [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${params.cat}`)
    .then(res=> res.json())
    .then(json => setProducts(json))
  },[params.cat])
  return (
    <>
      <section className="py-4">
     <h1 className="container sm:text-2xl text-xl font-bold my-6 uppercase ">{products.length > 0 ? products[0].category : 'Loading...'}</h1>
      <div className="container grid sm:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-8 w-[80vw]">
        {products.map((a)=>(
          <div className="shadow-lg outline outline-1 outline-slate-200 p-2 sm:h-fit h-fit text-nowrap relative">
            <Link href={`/details/${a.id}`}>
          <img className="sm:h-[26vh] h-[18vh]" src={a.image}  alt='products' />
          <h2 className="my-2"><span className="">{a.title}</span></h2>
            </Link>
            <p className=' sm:text-[0.94vw] text-[2.6vw] py-2 capitalize'>Category: {a.category}</p>
          <div className="flex flex-col gap-2 py-2">
            <div className="sm:text-[0.94vw] text-[2.6vw]">Price: ${a.price}</div>
            <div className="sm:text-[0.94vw] text-[2.6vw]">Rating: {a.rating.rate}<span className="text-yellow-500 inline-flex">★</span></div>
            <button className="w-fit sm:text-[1vw] text-[3.2vw] bg-orange-600 text-white rounded-sm hover:bg-slate-800 hover:scale-[1.04] p-1 px-2" aria-label="Order now">Order Now <TiShoppingCart className="inline-flex"/></button>
          </div>
        </div>
        ))}
      </div>
     </section>
    </>
  )
}

export default page
