"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Catg() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            })
    }, [])

    return (
        <>
            <div className="container sm:hidden">
                <div className='inline-block drop-down text-xs'>
                    <button className='text-orange-500'>Category<span>▾</span></button>
                        <ul className='capitalize hidden p-1'>
                        {products.length > 0 && (
                                <>
                                    <li><Link href={`/category/${products[1].category}`}>{products[1].category}</Link></li>
                                    <li><Link href={`/category/${products[15].category}`}>{products[15].category}</Link></li>
                                    <li><Link href={`/category/${products[4].category}`}>{products[4].category}</Link></li>
                                    <li><Link href={`/category/${products[8].category}`}>{products[8].category}</Link></li>
                                </>
                            )}
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Catg;