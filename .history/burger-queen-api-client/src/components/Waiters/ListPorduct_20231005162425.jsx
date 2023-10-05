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
    //Debería guardar el id del producto para luego mostrarlo en el renderizado
    const productToAdd = showData.find((product) => product.id === productId);
    const productIsAlReadyInOrder = order.some(
      (product) => product.id === productId
    );

    if (productIsAlReadyInOrder) {
      setOrder((prevOrder) => [...prevOrder.map(product => {
        return {
          
        }
      })]);
    } else { 
      productToAdd.qty = 1
      setOrder((prevOrder) => [...prevOrder, productToAdd]);
    }

    if (productToAdd) {
      setOrder((prevOrder) => [...prevOrder, productToAdd]);
    }
  };
  const handleDeleteClick = (productId) => {
    setOrder((prevOrder) =>
      prevOrder.filter((product) => product.id !== productId)
    );
  };

  return (
    <>
      {/* <button className='buttonBreackfast border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Breackfast</button>
      <button className='buttonLunch border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Lunch</button> */}
      <table className=' tableShow w-10/12 mx-24'>
        <thead>
          <tr className='flex  justify-center  '>
            <th className=' bg-amber-400 basis-1/3 text-2xl'>Img</th>
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
                    width={200}
                    height={200}
                  />
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl'>
                  {product.name}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl'>
                  {product.type}
                </td>
                <td className=' bg-orange-100 basis-1/2 text-xl'>
                  {product.price}$
                </td>
                <td className=' bg-orange-100 basis-1/2 space-x-4 space-y-1 flex flex-row justify-center items-center'>
                  <Buttons
                    onClick={handleAddClick}
                    productId={product.id}
                    label='Add'
                    className='addButton rounded-lg  bg-amber-400  p-2 text-xl mt-1 w-20 drop-shadow-lg'
                  />
                  <Buttons
                    onClick={handleDeleteClick}
                    productId={product.id}
                    label='Delete'
                    className='buttonDelete rounded-lg  bg-red-500 p-2 text-xl w-20 drop-shadow-lg'
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
