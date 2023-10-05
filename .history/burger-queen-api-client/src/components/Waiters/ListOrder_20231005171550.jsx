import React, { useEffect, useState } from 'react';
import axios from 'axios';

// export const ListOrder = ({order, setOrder})=>{
//     const addProduct = (product) => {
//         setOrder([...order, product]);
//     }
//     console.log(order)

export default function ListOrder({ order }) {
  // Función para calcular el total de los precios
  const calculateTotal = () => {
    return order.reduce((total, product) => total + product.price, 0);
    //* product.quantity para agregar la cantidad
  };

  // Función para agrupar los productos por ID y sumar las cantidades
  //   const groupedOrder = order.reduce((acc, product) => {
  //     const existingProduct = acc.find((p) => p.id === product.id);
  //     if (existingProduct) {
  //       existingProduct.quantity += product.quantity;
  //     } else {
  //       acc.push({ ...product });
  //     }
  //     return acc;
  //   }, []);

  return (
    <>
      <table className='tableProducts w-3/6 mx-72 my-20'>
        <thead>
          <tr className='productsHeadTable'>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
            <button className=' bg-amber-400 basis-1/2 text-2xl' 
            onClick={() => handleAddClick(product.qty)}>+</button>
            <button className=' bg-amber-400 basis-1/2 text-2xl'
            onClick={() => handleDeleteClick(product.qty)}>-</button>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Cantidad Suma</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Cantidad Resta</th>
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
                  {product.price}$
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>
                  {product.qty}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl p-2'>
                  {product.qty}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className='bg-orange-100  text-xl p-2'>Total</th>
            <th className='bg-orange-100 text-xl p-d'>{calculateTotal()}$</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
