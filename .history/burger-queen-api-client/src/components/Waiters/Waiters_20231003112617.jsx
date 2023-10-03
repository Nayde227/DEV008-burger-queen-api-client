import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListProducts from './ListPorduct';
import ListOrder from './ListOrder';

export default function Waiters() {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='padreLogin'>
      <h1 className='text-amber-400 text-8xl m-12'>Burger Queen Waiters</h1>
      <button
        onClick={handleBackClick}
        className='buttonSingOut  border-2 rounded-lg border-red-400 p-1 '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='50'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
          <polyline points='16 17 21 12 16 7' />
          <line x1='21' x2='9' y1='12' y2='12' />
        </svg>
      </button>
      <form>
        <label className='inputName text-5l'>
          Name:
          <input type='text' name='name' />
        </label>
        
        <input className='buttonSubmit m-6' type='submit' value='Submit' />
      </form>

      <ListProducts setOrder={setOrder}></ListProducts>

      <ListOrder order={order}></ListOrder>
    </div>
  );
}
