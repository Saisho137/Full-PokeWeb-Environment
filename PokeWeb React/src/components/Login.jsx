import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { userContext } from './context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useContext(userContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const [error, setError] = useState(null)

    const handleChangeName = e => {
        setName(e.target.value);
    }

    const handleChangePass = e => {
        setPassword(e.target.value);
    }

    const confirmUser = async (name, password) => {

        const body = {
            emailUser: name,
            userPassword: password
        }

        const url = `http://localhost:5103/api/PokeWeb/api/confirmarUsuario`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);
    }

    const registerUser = async (name, password) => {

        const body = {
            emailUser: name,
            userPassword: password
        }

        const url = `http://localhost:5103/api/PokeWeb/api/registrarUsuario`
        const respuesta = await axios.post(url, body)
        
        setLogin(respuesta);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        confirmUser(name, password)
    }
    

    if (login != ""){
        if (login.data.confirmation == true) {
            setUser(name)
            navigate("/pokedex", {replace:true})
        }
        else{
            alert("Credential error")
            setLogin("")
        }
        
    }
    

    return (
        <>
            <div className="log-container">
                <form onSubmit={onSubmit} className="search-container">
                    <div>
                    <input className="search"
                        placeholder="Email"
                        value={name}
                        onChange={handleChangeName}
                    />
                    </div>
                    <input type="password" className="search"
                        placeholder="Password"
                        value={password}
                        onChange={handleChangePass}
                    />
                    <div>
                        <button className="btn btn-primary btnlog">Login</button>
                    </div>
                </form>
                {name && password != "" ? <button className="btn btn-primary search-container btnregist" onClick={() => registerUser(name, password)}>Register</button> : console.log(typeof name)}
            </div>
            <div>
                <h1 className="poke-style">Welcome to PokeWeb!</h1>
            </div>
        </>
    );
}

export default Login;
