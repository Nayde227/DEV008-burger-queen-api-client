import React, { useEffect, useState } from 'react';
import { Buttons } from './Buttons';
import axios from 'axios';

export default function ListProducts({ setOrder, order }) {
  const [showData, setShowData] = useState([]);

  const token = localStorage.getItem('Mytoken'); //guardamos el token obtenido en el login para obtener los productos

  const auth = `Bearer ${token}`; //declaramos constante auth y headers para luego llamarla en la petición

  useEffect(() => {
    const headers = {
      'content-type': 'application/json',
      authorization: auth,
    };
    axios
      .get('http://localhost:8080/products', {
        headers: headers,
      })
      .then((response) => {
        setShowData(response.data);
      });
  }, []);

  const handleAddClick = (productId) => {

    const productToAdd = showData.find((product) => product.id === productId);
    const productIsAlReadyInOrder = order.some(
      //some retornoa t or f si encuentra una coincidencia
      (product) => product.id === productId
    );

    if (productIsAlReadyInOrder) {
      setOrder((prevOrder) => [
        ...prevOrder.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              qty: product.qty + 1,
            };
          } else {
            return {
              ...product
            };
          }
        }),
      ]);
    } else {
      productToAdd.qty = 1;
      setOrder((prevOrder) => [...prevOrder, productToAdd]);
    }
  };
  const handleDeleteClick = (productId) => {
    setOrder((prevOrder) => {
      if(prevOrder.find((product) => product.id === productId)?.qty === 1){
        return prevOrder.filter((product) => product.id !== productId)
      } else {
        return prevOrder.map((product) => {
          if(product.id === productId){
            return { ...product, qty: product.qty -1}
          } else {
            return product
          }
        })
      }
  });
  };

  return (
    <>
      {/* <button className='buttonBreackfast border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Breackfast</button>
      <button className='buttonLunch border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Lunch</button> */}
      <table className=' tableShow w-10/12 mx-24'>
        <thead>
          <tr className='flex  justify-center  '>
            <th className=' bg-amber-400 basis-1/4 text-2xl'>Img</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Product Name</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Type</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Price</th>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Add or Delete</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((product) => {
            return (
              <tr key={product.id} className='flex  self-center'>
                <td>
                  <img
                    className='imageProduct  bg-orange-100'
                    src={product.image}
                    width={201}
                    height={200}
                  />
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl pt-4'>
                  {product.name}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl pt-7'>
                  {product.type}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl pt-7'>
                  {product.price}$
                </td>
                <td className=' bg-orange-100 basis-1/2 space-x-4 space-y-1 flex flex-row justify-center items-center'>
                  <Buttons
                    onClick={handleAddClick}
                    productId={product.id}
                    label='+'
                    className='addButton rounded-lg  bg-amber-400 text-4xl mt-1 w-14 drop-shadow-lg'
                  />
                  <Buttons
                    onClick={handleDeleteClick}
                    productId={product.id}
                    label='-'
                    className='buttonDelete rounded-lg  bg-red-500  text-4xl w-14 drop-shadow-lg'
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
