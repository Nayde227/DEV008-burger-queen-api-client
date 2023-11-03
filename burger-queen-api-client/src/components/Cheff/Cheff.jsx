import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Cheff() {

    const navigate = useNavigate();
    //boton atrás
    const handleBackClick = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const [showOrders, setShowOrders] = useState([]);

    const token = localStorage.getItem('Mytoken'); //guardamos el token obtenido en el login para obtener los productos

    const auth = `Bearer ${token}`; //declaramos constante auth y headers para luego llamarla en la petición

    useEffect(() => {
        const headers = {
            'content-type': 'application/json',
            authorization: auth,
        };
        axios
            .get('http://localhost:8080/orders', {
                headers: headers,
            })
            .then((response) => {
                setShowOrders(response.data);
            });
    }, []);

    return (
        <div className="padreCheff">
            <section className='titleCheff ml-8 flex'>
                <h1 className='text-amber-400 text-8xl '>Burger Queen Chef</h1>
                <button
                    onClick={handleBackClick}
                    className='buttonSingOut ml-5 mt-4 rounded-lg flex-row'
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
            <h2 className='text-5xl font-bold mb-7'>Pending Orders</h2>
            <table className='TablePending flex flex-col justify-center '> 
                <thead className='flex-col self-center'>
                    <tr >
                        <th className=' bg-amber-400 basis-1/2 text-2xl p-5'>Client</th>

                        <th className=' bg-amber-400 basis-1/2 text-2xl p-7'>Date</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl p-7'>Product</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl p-7'>Qty</th>
                        <th className=' bg-amber-400 basis-1/2 text-2xl p-7'>Status</th>
                    </tr>
                </thead>
                <tbody className='flex flex-col'>

                    {showOrders.map((product) => {
                        return (
                            <tr key={product.id} className='flex  self-center'>
                                <td className=' bg-amber-400 basis-1/4 text-xl p-4'>{product.client}</td>
                                <td className=' bg-orange-100 basis-1/2 text-xl p-4'>{product.dataEntry}</td>
                                <td className=' bg-orange-100 basis-1/2 text-xl p-4'>
                                    {product.products[0].product.name}
                                </td>
                                <td className=' bg-orange-100 basis-1/8 text-xl p-4'>
                                    {product.products[0].qty}
                                </td>
                                <td className=' bg-orange-100 basis-1/4 text-xl p-4'>
                                    {product.status}
                                </td>


                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    )
}