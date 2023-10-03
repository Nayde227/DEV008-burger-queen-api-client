import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListOrder({ order }) {

    return (
        <>
            <table className='tableProducts w-3/6 mx-72 my-20'
            >
                <thead>
                    <tr className='productsHeadTable'>
                        <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {order.map((product) => {
                        return (
                            <tr key={product.id}
                                className='productBodyTable' >
                                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>{product.name}</td>
                                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>{product.price}$</td>
                                

                                
                            </tr>)

                    })}
                </tbody>
                <tfoot>
                    <tr>
                    <th className='bg-orange-100  text-xl p-2'>Total</th>
                    <th className='bg-orange-100 text-xl p-d'></th>
                    </tr>
                    
                </tfoot>
            </table>
        </>
    )
}