import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Waiters() {
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
        console.log('data', response.data);
        setShowData(response.data)
      });
    
  }, []);


  return (
    <div className='padreLogin'>
      <h1 className='text-amber-400 text-8xl m-10'>Burger Queen Waiters</h1>
      <h2 className='text-4xl font-bold p-4'>Create Order</h2>

      <table className= 'tableShow w-full'>
        <thead>
          <tr className='flex flex-row justify-center'>
            <th className='border border-black bg-amber-400 basis-1/2 text-2xl'>Name</th>
            <th className='border border-black bg-amber-400 basis-1/2 text-2xl'>Type</th>
            <th className='border border-black bg-amber-400 basis-1/2 text-2xl'>Price</th>
            <th className='border border-black bg-amber-400 basis-1/2 text-2xl'>Add or Delete</th>
          </tr>
        </thead>
        <tbody>
        {showData.map((product) => {
          return (
            <tr key={product.id}
            className='flex flex-row self-center' >
              <td className='border border-black bg-orange-100 basis-1/2 text-xl'>{product.name}</td>
              <td className='border border-black bg-orange-100 basis-1/2 text-xl'>{product.type}</td> 
              <td className='border border-black bg-orange-100 basis-1/2 text-xl'>{product.price}</td>
              <td className='border border-black bg-orange-100 basis-1/2 space-x-5 space-y-1'>
              
               <button className='buttonAdd border rounded-lg border-black bg-amber-500  p-1 text-xl'>Add</button> 
               <button className='buttonDelete border rounded-lg border-black bg-red-400 p-1 text-xl'>Delete</button>
               
              </td>
            </tr>)
        })}
        </tbody>
      </table>
      
      {/* <table className='tableTwo'>
        <thead>
          <tr>
            <th className='border border-black bg-amber-500 basis-1/2'>Image</th>
          </tr>
        </thead>

        <tbody>
          <tr>
          <td className='border border-black bg-orange-100 basis-1/2'><img src={product.image} /></td>
          </tr>
        </tbody>
      </table> */}


      <button className='buttonSingOut border-2 rounded-lg border-red-400 p-1 text-xl'>Sign Out</button>
    </div>
  );
}
