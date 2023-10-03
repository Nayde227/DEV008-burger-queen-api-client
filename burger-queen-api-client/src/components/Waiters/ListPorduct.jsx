import React, { useEffect, useState } from 'react';
import {Buttons} from './Buttons'
import axios from 'axios';

export default function ListProducts({ setOrder }) {
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

    const handleAddClick = (productId) => {
        //Debería guardar el id del producto para luego mostrarlo en el renderizado
        const productToAdd = showData.find((product) => product.id === productId)

        if(productToAdd){
            setOrder((prevOrder)=> [...prevOrder, productToAdd])
            
        }
    
    }
     const handleDeleteClick = (productId) => {
        setOrder((prevOrder)=> prevOrder.filter((product)=> product.id !== productId))
     }
        
   

    return (
        <>
<h2 className='text-5xl font-bold p-4'>Create Order</h2>
      <button className='buttonSingOut border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Breackfast</button>
      <button className='buttonSingOut border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Lunch</button>
      <table className= 'tableShow w-full'>
        <thead>
          <tr className='flex flex-row justify-center'>
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
            <tr key={product.id}
            className='flex flex-row self-center' >
              <td><img className="imageProduct  bg-orange-100" src={product.image} width={200} height={200}/></td>
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.name}</td>
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.type}</td> 
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.price}$</td>
              <td className=' bg-orange-100 basis-1/2 space-x-5 space-y-1'>
              
               <Buttons onClick={handleAddClick} productId={product.id} label='Add' className='addButton border rounded-lg  bg-amber-500  p-1 text-xl'/>
               <Buttons onClick={handleDeleteClick} productId={product.id} label='Delete' className='buttonDelete border rounded-lg  bg-red-400 p-1 text-xl'/>
               
              </td>
            </tr>)

        })}
        </tbody>
      </table>
      </>
    )
}