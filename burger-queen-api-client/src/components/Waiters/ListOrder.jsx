import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListOrder({ order }) {

    return (
        <>
            <table className='tableProducts w-3/6 mx-72 my-20'
            >
                <thead>
                    <tr className='flex flex-row justify-center'>
                        <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl'>Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {order.map((product) => {
                        return (
                            <tr key={product.id}
                                className='flex flex-row self-center' >
                                <td className=' bg-orange-100 basis-1/2 text-xl'>{product.name}</td>

                                <td className=' bg-orange-100 basis-1/2 text-xl'>{product.price}$</td>
                                <td className=' bg-orange-100 basis-1/2 space-x-5 space-y-1'>



                                </td>
                            </tr>)

                    })}
                </tbody>
            </table>
        </>
    )
}