import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListProducts from './ListPorduct';
import ListOrder from './ListOrder';

export default function Waiters() {
  const [order, setOrder] = useState([]);
  const [clientName, setClientName] = useState("");

  const navigate = useNavigate();

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  function handleSubmit(e) {
    // Previene que el navegador recargue la página
    e.preventDefault();

    // Lee los datos del formulario
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // Guarda el nombre del cliente en el estado
    setClientName(formJson.name);

    // Limpia el formulario (opcional)
    form.reset();
  }
  return (
    <div className='padreWaiters'>
      <section className='titleWaiters ml-8'>
      <h1 className='text-amber-400 text-8xl '>Burger Queen Waiters</h1>
      <button
        onClick={handleBackClick}
        className='buttonSingOut  rounded-lg '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
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
      
      </section>
      <h2 className='text-5xl font-bold p-4'>Create Order</h2>






      <form method="post" onSubmit={handleSubmit}>
        <label className='bg-amber-400 basis-1/2 inputName text-3xl ml-2 p-1 rounded-lg'>
          Client Name:
          <input className='bg-orange-100 m-3' type='text' name='name' />
        </label>

        <input className='buttonSubmit m-6 border-4 border-amber-400 drop-shadow-2xl bg-orange-100 px-4 py-2 rounded-lg font-semibold text-xl ' type='submit' value='Save' />
      </form>

      <div className=' text-3xl m-2 font-semibold'>
        Client: {clientName}
      </div>
      <ListProducts setOrder={setOrder}></ListProducts>
      <ListOrder order={setOrder}></ListOrder>
      <ListOrder order={order}></ListOrder>
      <button className='buttonSend rounded-lg bg-orange-100 p-1 m-3 text-3xl w-48 drop-shadow-2xl font-semibold'>Send Order</button>

    </div>
  );
}
