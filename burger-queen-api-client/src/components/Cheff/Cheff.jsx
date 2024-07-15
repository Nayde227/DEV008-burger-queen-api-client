import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Cheff() {

    const [serve, setServe] = useState([]);
    
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


    function handleDoneOrder(e) {
        // Previene que el navegador recargue la página
        e.preventDefault();
        alert('Serve Order')
    }
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
            {showOrders.map((product) => {
                if (product.products && product.products.length > 0 && typeof product.dataEntry === 'string') {
                    
                    
                        const datesEntry = product.dataEntry;
                        const parts = datesEntry.split(' ');
                        const hour = parts[1];

                        let hour1 = '';
                        let tiempoPrepMin = '';

                        if (product.dataProcessed=== 'string') {
                            const datesProcessed = product.dataProcessed;
                            const parts1 = datesProcessed.split(' ');
                            hour1 = parts1[1];

                            // Calcular la diferencia de tiempo en milisegundos
                            const tiempoPrepMS = new Date(datesProcessed) - new Date(datesEntry);

                            // Convertir la diferencia de tiempo a minutos
                            tiempoPrepMin = Math.floor(tiempoPrepMS / (1000 * 60)); // Redondear hacia abajo
                            console.log('si funciono time', tiempoPrepMin)
                        }
                        
                        return ( 
                            <table key={product.id} className='TablePending flex flex-col mt-8 table-auto items-center '>

                                <thead className='flex-col '>

                                    <tr>
                                        <th><button className='dropdown'><img className='dropdowni bg-amber-400 ' src='src\assets\dropdonw.png'></img></button></th>
                                        <th className=' bg-amber-400 text-2xl p-5'>Client </th>
                                        <th className=' bg-amber-400 text-2xl p-7'>Recived</th>
                                        <th className=' bg-amber-400 text-2xl p-7'>Status</th>
                                        <th className=' bg-amber-400 text-2xl p-7'>Delivered</th>
                                        <th className=' bg-amber-400 text-2xl p-7'>Time</th>
                                    </tr>
                                </thead>
                                <tbody className='flex flex-col '>
                                    <tr>
                                        <td className=' bg-orange-100 text-2xl p-5'>{product.client} </td>
                                        <td className=' bg-orange-100 text-2xl p-5'>{hour} </td>
                                        <td className=' bg-orange-100 text-2xl p-5'>{product.status} </td>
                                        <td className=' bg-orange-100 text-2xl p-5'>{hour1} hour1</td>
                                        <td className=' bg-orange-100 text-2xl p-5'>{tiempoPrepMin} time </td>
                                    </tr>

                                    <tr className='flex '>
                                        <td className=' bg-orange-100 text-2xl px-5 py-7 '>
                                            {product.products[0].product.name}
                                        </td>
                                        <td className=' bg-orange-100 text-2xl px-10 py-7 '>
                                            {product.products[0].qty}
                                        </td>
                                    </tr>

                                    <tr className='flex '>
                                        <td className=' bg-orange-100 text-2xl px-5 py-7 '>
                                            {product.products[1].product.name}
                                        </td>
                                        <td className=' bg-orange-100 text-2xl px-10 py-7 '>
                                            {product.products[1].qty}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <button
                                                onClick={handleDoneOrder}
                                                className='buttonSend rounded-lg bg-amber-400 p-1 text-2xl w-48 drop-shadow-2xl font-semibold'>
                                                Done
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                             );
                            } else {
                                console.log('dateProcessed is undefined:');
                                return null ;
                            }
                        })}



        </div>
    )
}