import React from 'react';
import Card from './Card';
import axios from 'axios';
import BounceLoader from "react-spinners/BounceLoader";
import PokeDB from './Pokedex';
import { useContext, useEffect,useState } from 'react';
import { userContext } from './context/userContext';
import UsePoke from '../hooks/usePoke';

const Search = () => {

    
    const [poke, setPoke] = useState("");
    const [name, setName] = useState("");
    const [pokeContext, setPokeContext] = useContext(userContext)
    const {requestCompanion, idPoke} = UsePoke(pokeContext);


    const getPokemon = async (name) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            const respuesta = await axios.get(url)
            setPoke(respuesta.data)
        } catch (error) {
            console.log("Pokemon erroneo");
        }
    }

    useEffect(() => {
        requestCompanion(pokeContext)
    }, []);

    const handleChange = e => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getPokemon(name)
    }

    return (
        <>
        <h1 className="poke-style gotta">Gotta catch 'em all!</h1>
        <div className="poke">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Press enter to search"
                    className="search"
                    value={name.toLocaleLowerCase()}
                    onChange={handleChange}
                />
                <button type="submit"></button>
            </form>  
            {poke.id ? <Card pokeObj={poke} key={poke.id} idPoke={idPoke}/> : null}
        </div>
        </>
    );
}

export default Search;
