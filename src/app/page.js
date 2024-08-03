"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './globals.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { InfinitySpin } from 'react-loader-spinner';
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import Sale from "./Sale";

export default function Home() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      })
  }, [])

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
        <div className="container flex gap-4 text-nowrap">

          <div className="w-[25%] shadow-lg sm:inline-flex hidden md:text-[1vw] sm:text-[0.8vw] rounded-lg p-4 outline outline-1 capitalize outline-slate-200 flex flex-wrap hover:bg-slate-100">
            <div className="w-full hover:text-red-400"><Link href={`/category/${products[1].category}`}>{products[1].category}</Link></div>
            <div className="w-full hover:text-red-400"><Link href={`/category/${products[15].category}`}>{products[15].category}</Link></div>
            <div className="w-full hover:text-red-400"><Link href={`/category/${products[4].category}`}>{products[4].category}</Link></div>
            <div className="w-full hover:text-red-400"><Link href={`/category/${products[8].category}`}>{products[8].category}</Link></div>
            <div className="w-full hover:text-red-400"><a href="">Sports & Outdoor<span className="text-red-400">[out of stock]</span></a></div>
            <div className="w-full hover:text-red-400"><a href="">Motors, Tools & DIY<span className="text-red-400">[out of stock]</span></a></div>
            <div className="w-full hover:text-red-400"><a href="">Watches & Accessories<span className="text-red-400">[out of stock]</span></a></div>
          </div>

          <div className="sm:w-[75%] w-full">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper rounded-xl"
            >
              <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/72a71173-4fbe-4712-81ff-4354251562d8.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/0709b0a7-219b-4371-b3e3-5136b11e6a6f.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/c277377a-beb0-4b81-a0ab-a3104ca33d4d.png" alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <Sale />

      <section className="py-4">
        <h1 className="container sm:text-2xl text-xl font-semibold my-6">Just For You</h1>
        <div className="container grid sm:grid-cols-4 md:grid-cols-6 grid-cols-2 gap-4">
          {products.map((a) => (
            <div className="shadow-lg outline outline-1 outline-slate-200 p-2 sm:h-fit text-nowrap relative">
              <Link href={`/details/${a.id}`}>
                <img className="sm:h-[26vh] h-[18vh]" src={a.image} alt='products' />
                <h2 className="my-2"><span className="">{a.title}</span></h2>
              </Link>
              <div className="flex flex-col gap-2 py-2">
                <div className="sm:text-[0.94vw] text-[2.6vw]">Price: ${a.price}</div>
                <div className="sm:text-[0.94vw] text-[2.6vw]">Rating: {a.rating.rate}<span className="text-yellow-500 inline">★</span></div>
                <button className="w-fit sm:text-[1vw] text-[3.2vw] bg-orange-600 text-white rounded-sm hover:bg-slate-800 hover:scale-[1.04] p-1 px-2" aria-label="Order now">Order Now <TiShoppingCart className="inline-flex" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

