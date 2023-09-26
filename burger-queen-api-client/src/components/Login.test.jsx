import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react'
//import {main} from '../main'
import App from "../App";


describe("App", () => {
    it.only("debe mostrar un mensaje de error si las credenciales son incorrectas", async() =>{
        //render del login
        render(<App />)
        screen.debug()
    })
})