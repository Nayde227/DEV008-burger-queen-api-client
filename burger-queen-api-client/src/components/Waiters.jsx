import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Waiters() {
  

  const token = localStorage.getItem("Mytoken"); //guardamos el token obtenido en el login para obtener los productos
  
  const auth= `Bearer ${token}`//declaramos constante auth y headers para luego llamarla en la petición
  
  const headers = {
    'content-type': 'application/json',
    'authorization': auth
  }
    axios.get('http://localhost:8080/products', {
      headers: headers
    } 
     
      
    ).then((response) => {
      return console.log(response.json())
      
    })

    return (
        <div className="padreLogin">

            <h1>Burger Queen Waiters</h1>
            <h2>Create Order</h2>
            {/* <input
            list="products"
            id="inputProducts"
            placeholder="Add Products"
          /> */}
          <select class="Add Products">
            <option value="Sandwich">Sandwich</option>
            <option value="Orange Juice">Orange Juice</option>
            <option value="Latte">Latte</option>
          </select>
          <button>Sign Out</button>
        </div>
    ) 
   
}