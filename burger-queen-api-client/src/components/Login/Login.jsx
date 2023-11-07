import { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const payload = {
    email: email,
    password: password,
  };


  const onSubmitHandler = (e) => {
    e.preventDefault()
    let us = document.getElementById("email").value;
    let pas = document.getElementById("password").value;
    
    axios
      .post(
        "http://localhost:8080/login",
        payload
      )

      .then((response) => {
        
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Mytoken", response.data.accessToken);
        
          const userRole = response.data.user.role;
          if(userRole === "admin"){
            navigate("/admin")
          } else if (userRole === "waiter") {
            
            navigate("/waiters");
          } else if (userRole === "cheff") {
            
            navigate("/cheff");
          }
          
        
      }).catch((error) => {
        if (error) {
          Swal.fire({
            title: 'Wrong email or password',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#f31414aa',
          })
        } 
      });
  };

  return (
    <div className="padreLogin">
      <h1 className="titleLogin">Burger Queen App</h1>
      <form className="formulario" onSubmit={onSubmitHandler}>
        <input
          className='Email'
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='EMAIL'
          required>
        </input>
        <br></br>
        <input
          className='Password'
          id="password"
          type="password"
          placeholder='PASSWORD'
          onChange={(e) => setPassword(e.target.value)}
          required>
        </input>
        <br></br>
        <button
          className='signIn'
          type="submit"
        >Sign In</button>
      </form>
    </div>
  );
}