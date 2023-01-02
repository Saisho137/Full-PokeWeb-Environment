import axios from 'axios';
import React from 'react';
import Card from './Card';
import BounceLoader from "react-spinners/BounceLoader";
import Search from './Search'; 
import { useContext, useEffect,useState } from 'react';
import { userContext } from './context/userContext';
import UsePoke from '../hooks/usePoke';

const Generations = ({ name }) => {

    return (
        <div className="generation"><li>{name}</li></div>
    )
}


const Pokedex = () => {

    const [name, setName] = useContext(userContext)
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState('charizard')
    const [pokemon, setPokemon] = useState({})
    const [pokedex, setPokedex] = useState([])
    const {requestCompanion, idPoke} = UsePoke(name);

    const generations = [
        ["Kanto", 1, 151],
        ["Johto", 152, 251],
        ["Hoenn", 252, 386],
        ["Sinnoh", 387, 493],
        ["Unova", 494, 649],
        ["Kalos", 650, 721],
        ["Alola", 722, 809],
        ["Galar", 810, 905]
    ];

    const getPokedex = async () => {
        for (let i = 0; i < 9; i++) {
            if (i > 7) break;
            setPokedex((pokedex) => [...pokedex, generations[i][0]])
            for (let id = generations[i][1]; id <= generations[i][2]; id++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const respuesta = await axios.get(url)
                setPokedex((pokedex) => [...pokedex, respuesta.data]);
            }
            
        }
    }

    useEffect(() => {
        requestCompanion(name)
    }, []);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        getPokedex()
    }, []);

    if (!pokedex[0]) return null;

    return (
        <>
            {
                loading ?
                    <div>
                        <BounceLoader className='loader' color={'#ff0000'} loading={loading} size={80} aria-label="Loading Spinner" />
                        <p className='text-loader'>PokeWeb</p>
                    </div>
                    :
                    <div className='flex'>
                        <div className="poke-style">Pokedex</div>
                        {pokedex.map(entry => (typeof entry) == "string" ? <Generations name={entry} key={entry} /> : <Card pokeObj={entry} key={entry.id} idPoke={idPoke} />)}
                    </div>

            }
        </>
    );

}


export default Pokedex;
