import { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
export default function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
    
   const payload = {
    email: email,
    password: password,
    };

    const onSubmitHandler = (e) => {
      e.preventDefault()
      axios
      .post(
      "http://localhost:8080/login",
      payload
      )
      
      .then((response) => {
      const response1 = response;
      localStorage.setItem("stringify", JSON.stringify(response1));
      localStorage.setItem("Mytoken", response1.data.token);
      }).catch((error)=>{
        // if (error === "incorrect password") {
        //   Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        //   })
        // }
      });
      };

  return (
        <div className="padreLogin">
          <h1>Burger Queen App</h1>
          <form className="formulario" onSubmit={onSubmitHandler}>
          <input 
           className='Email'
           type="email" 
           onChange={(e) => setEmail(e.target.value)} 
           placeholder='EMAIL'>
           </input>
          <br></br>
          <input 
          className='Password' 
          type="password" 
          placeholder='PASSWORD'
          onChange={(e) => setPassword(e.target.value)}>
          </input>
          <br></br>
          <button 
          className='singIn' 
          type="submit"
          >Sing In</button>
          </form>
        </div>
      );
    }