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
      <h1>Burger Queen Waiters</h1>
      <h2>Create Order</h2>

      <table className= 'table w-full'>
        <thead>
          <tr className='flex flex-row justify-center'>
            <th className='border border-black bg-indigo-500 basis-1/2'>Name</th>
            <th className='border border-black bg-indigo-500 basis-1/2'>Type</th>
            <th className='border border-black bg-indigo-500 basis-1/2'>Price</th>
            <th className='border border-black bg-indigo-500 basis-1/2'>Image</th>
          </tr>
        </thead>
        <tbody>
        {showData.map((product) => {
          return (
            <tr key={product.id}
            className='flex flex-row self-center' >
              <td className='border border-black bg-indigo-300 basis-1/2'>{product.name}</td>
              <td className='border border-black bg-indigo-300 basis-1/2'>{product.type}</td> 
              <td className='border border-black bg-indigo-300 basis-1/2'>{product.price}</td>
              <td className='border border-black bg-indigo-300 basis-1/2'><img src={product.image} /></td>
            </tr>)
        })}
        </tbody>
      </table>


      <button>Sign Out</button>
    </div>
  );
}
