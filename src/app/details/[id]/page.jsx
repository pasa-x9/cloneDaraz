"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";

function page({params}) {
    let [product, setProduct]=useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=> res.json())
        .then(json=> setProduct(json))
    },[params.id])
  return (
    <div className='my-20 uppercase text-pretty'>
      <h1 className='container sm:text-2xl text-[#0d115b] font-bold my-6'>{product.title}</h1>
    <div className='container flex overflow-hidden'>
      <img src={product.image} alt="" className='w-[50vw] h-[30vh] sm:w-[15vw] p-5 border shadow hover:scale-[1.04]' />
        <div className='px-5'>
        <p className='font-semibold sm:text-lg'>{product.description}</p>
        <Link href={`/category/${product.category}`}><div className=' text-sm py-2'>Category: {product.category}</div></Link>
          <div className="flex flex-col gap-2 ">
            <div className="sm:text-[0.94vw] text-[2.6vw]">Price: ${product.price}</div>
            <div className="sm:text-[0.94vw] text-[2.6vw]">Rating: {product.rating && product.rating.rate}<span className="text-yellow-500 inline-flex">★</span></div>
            <button className="w-fit sm:text-[1vw] text-[3.2vw] bg-orange-600 text-white rounded-sm hover:bg-slate-800 hover:scale-[1.04] p-1 px-2" aria-label="Order now">Order Now <TiShoppingCart className="inline-flex"/></button>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default page