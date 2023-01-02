import React from 'react';
import { useContext, useEffect,useState } from 'react';
import {userContext} from '../components/context/userContext';
import axios from 'axios';

const UsePoke = (emailUser) => {

    const [idPoke, setIdPoke] = useState([])
    const [pokeContext, setPokeContext] = useContext(userContext)

    const requestCompanion = async (emailUser) => {

        const body = {
            emailUser
        }

        const url = `http://localhost:5103/api/PokeWeb/api/requestCompanion`
        const respuesta = await axios.post(url, body)
        
        setIdPoke(respuesta.data.idCompanion);
    }
        
    return (

        {requestCompanion, idPoke}

    );
}

export default UsePoke;
