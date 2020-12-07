import axios from 'axios';

export const fetchPokemonAPI = () => ({
    type: 'FETCH_POKEMON'
})

export const fetchPokemonAPIAction = () =>{
    return(dispatch) => {
        dispatch(fetchPokemonAPI())
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
            .then(res => {
                console.log("####### RESPONSE POKEMON ACTION #######")
                console.log(res)
                dispatch({
                    type: 'FETCH_POKEMON_SUCCESS',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_POKEMON_FAILED'
                })
                throw err
            })
    }
}


export const fetchDetailPokemonAPIAction = (url) =>{
    return(dispatch) => {
        dispatch(fetchPokemonAPI())
        axios.get(url)
            .then(res => {
                console.log("####### RESPONSE POKEMON ACTION #######")
                console.log(res)
                dispatch({
                    type: 'FETCH_POKEMON_SUCCESS',
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_POKEMON_FAILED'
                })
                throw err
            })
    }
}