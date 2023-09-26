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
        console.log(response.data);
        console.log('console de show', setShowData(response.data));
      });
    
  }, []);

  /* const showData = (data) => {
      //console.log('Nuevo console', response.data)
      let body = ''
      for(let i = 0; i < data.length; i++){
        body += `<tr> <td>${data[i].name}</td> <td>${data[i].image}</td> <td>${data[i].type}</td> <td>${data[i].image}</td></tr>`
      }
    }*/
  return (
    <div className='padreLogin'>
      <h1>Burger Queen Waiters</h1>
      <h2>Create Order</h2>
      {showData.map((product) => {
        <p>{product.name}</p>;
      })}
      <select className='Add Products'>
        <option value='Sandwich'>Sandwich</option>
        <option value='Orange Juice'>Orange Juice</option>
        <option value='Latte'>Latte</option>
      </select>

      <section>
        <th>Price</th>
        <th>Name</th>
        <th>Type</th>
        <th>Image</th>
        <tbody></tbody>
      </section>
      <button>Sign Out</button>
    </div>
  );
}
