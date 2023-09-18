export default function Login() {
  
    
  return (
        <div className="padreLogin">
          <h1>Burger Queen App</h1>
          <form className="formulario">
          <input className='Email' type="email" placeholder='EMAIL'></input>
          <br></br>
          <input className='Password' type="password" placeholder='PASSWORD'></input>
          <br></br>
          <button className='singIn' type="submit">Sing In</button>
          </form>
        </div>
      );
    }