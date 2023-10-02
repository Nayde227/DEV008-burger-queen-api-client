import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListProducts() {
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

        
        
    const handleClick = (e) => {
        //Debería guardar el id del producto para luego mostrarlo en el renderizado
        e.preventDefault();
        // setShowData((productItems) => {
        //     const isProductFound = productItems.find((product)=> product.id);
        //     if(isProductFound) {
        //         return productItems.map((product)=>{
        //             if(product.id){
        //                 return{...product, name: product.name}
        //             } else { return product}
        //         })
        //     }
        // })
        alert('¡Agregaste un producto!');
        
      }

    return (
        <>
<h2 className='text-5xl font-bold p-4'>Create Order</h2>
      <button className='buttonSingOut border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Breackfast</button>
      <button className='buttonSingOut border rounded-lg bg-yellow-400 p-1 m-3 text-3xl'>Lunch</button>
      <table className= 'tableShow w-full'>
        <thead>
          <tr className='flex flex-row justify-center'>
            <th className=' bg-amber-400 basis-1/2 text-2xl'>Name</th>
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
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.name}</td>
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.type}</td> 
              <td className=' bg-orange-100 basis-1/2 text-xl'>{product.price}$</td>
              <td className=' bg-orange-100 basis-1/2 space-x-5 space-y-1'>
              
               <button className='addButton border rounded-lg  bg-amber-500  p-1 text-xl'
                onClick={handleClick}>Add</button> 
               <button className='buttonDelete border rounded-lg  bg-red-400 p-1 text-xl'>Delete</button>
               
              </td>
            </tr>)

        })}
        </tbody>
      </table>
      </>
    )
}