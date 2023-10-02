import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListProducts from './ListPorduct';
import ListOrder from './ListOrder';

export default function Waiters() {
  
  const [order, setOrder] = useState ([])
 
  

  return (
    <div className='padreLogin'>
      <h1 className='text-amber-400 text-7xl m-12'>Burger Queen Waiters</h1>
      <button className='buttonSingOut border-2 rounded-lg border-red-400 p-1 text-xl'>Sign Out</button>
      <ListProducts></ListProducts>

      <ListOrder order={order} setOrder={setOrder}></ListOrder>
       


      
    </div>
  );
}
