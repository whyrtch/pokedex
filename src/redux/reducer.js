const initialState = {
    pokemons : {
        loading: false,
        data: [],
    },
    page  : 0
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    loading: true,
                },
            };
        case "FETCH_POKEMON_SUCCESS":
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    data: action.payload,
                    loading: false,
                },
            };
        case "FETCH_POKEMON_FAILED":
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    loading: false,
                },
            };
        default:
            return state;
    }

}

export default reducerApp;
