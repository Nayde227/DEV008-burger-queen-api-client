import React, { useEffect, useState } from 'react';
import { Buttons } from './Buttons';


export default function ListOrder({ order, setOrder }) {
  // Función para calcular el total de los precios
  const calculateTotal = () => {
    return order.reduce((total, product) => total + product.price * product.qty, 0);
    
  };

  const handleRemoveClick = (productId) => {
    setOrder((prevOrder) =>
      prevOrder.filter((product) => product.id !== productId)
    )}

  return (
    <>
      <table className='tableProducts w-3/6 mx-72 my-20'>
        <thead>
          <tr className='productsHeadTable'>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'></th> 
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Remove</th>
            {/* <button className=' bg-amber-400 basis-1/2 text-8xl' 
            onClick={() => handleAddClick(product.qty)}>+</button>
            <button className=' bg-amber-400 basis-1/2 text-8xl'
            onClick={() => handleDeleteClick(product.qty)}>-</button> */}
            
            {/* <th className=' bg-amber-400 basis-1/2 text-2xl'>-</th> */}
          </tr>
        </thead>
        <tbody>
          {order.map((product) => {
            return (
              <tr key={product.id} className='productBodyTable'>
                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>
                  {product.name}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>
                  {product.qty}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>
                  {product.price}$
                </td>
                <td className='  bg-orange-100 basis-1/2 space-x-4 space-y-1 flex flex-row justify-center items-center'>
                  
                <Buttons
                    onClick={handleRemoveClick}
                    productId={product.id}
                    label='Remove'
                    className='buttonDelete rounded-lg border-2 border-red-500 p-2 text-1xl w-18 m-2 drop-shadow-lg'
                 />
                  </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className='bg-orange-100  text-xl p-2'>Total</th>
            <th className='bg-orange-100  text-xl p-2'></th>
            <th className='bg-orange-100 text-xl p-d'>{calculateTotal()}$</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
