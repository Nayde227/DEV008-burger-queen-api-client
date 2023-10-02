import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListOrder({order, setOrder}) {

   
    // const token = localStorage.getItem('Mytoken'); //guardamos el token obtenido en el login para obtener los productos


  
    // const auth = `Bearer ${token}`; //declaramos constante auth y headers para luego llamarla en la petición
  
    // useEffect(() => {
    //   const headers = {
    //     'content-type': 'application/json',
    //     authorization: auth,
    //   };
    //    axios
    //     .get('http://localhost:8080/orders', {
    //       headers: headers,
    //     })
    //     .then((response) => {
    //       console.log('orders', response.data);
    //       setOrder(response.data)
          
    //     });
      
    // }, []);

   

    return(
        <>
        <table className= 'tableProducts'
        >
        <thead>
          <tr className='flex flex-row justify-center'>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
            
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
            
          </tr>
        </thead>
        <tbody>
        {order.map((product) => {
          return (
            <tr key={product.id}
            className='flex flex-row self-center' >
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.name}</td>
              
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.price}</td>
              <td className=' bg-orange-100 basis-1/2 space-x-5 space-y-1'>
              
               
               
              </td>
            </tr>)

        })}
        </tbody>
      </table>
        </>
    )
}