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
    if (us !== "grace.hopper@systers.xyz" ) {
      Swal.fire({
        title: 'Cannot find user',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else if ( pas !== "123456") {
      Swal.fire({
        title: 'Wrong Password',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    axios
      .post(
        "http://localhost:8080/login",
        payload
      )

      .then((response) => {
        
        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("Mytoken", response.data.accessToken);
        navigate("/profiles");
      }).catch((error) => {

      });
  };

  return (
    <div className="padreLogin">
      <h1>Burger Queen App</h1>
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