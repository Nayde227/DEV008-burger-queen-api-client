import { useState } from "react";
import axios from "axios";
export default function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
    
   const payload = {
    emailId: email,
    password: password,
    };

    const onSubmitHandler = () => {
      axios
      .post(
      "PASTE YOUR API HERE",
      payload
      )
      .then((response) => {
      const response1 = response;
      localStorage.setItem("stringify", JSON.stringify(response1));
      localStorage.setItem("Mytoken", response1.data.token);
      });
      };

  return (
        <div className="padreLogin">
          <h1>Burger Queen App</h1>
          <form className="formulario">
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
          onClick={onSubmitHandler}>Sing In</button>
          </form>
        </div>
      );
    }