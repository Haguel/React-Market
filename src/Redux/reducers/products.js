const initialState = {
    items: [],
    searchedWord: '',
}

const products = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PRODUCTS':{
            return {
                ...state,
                items: action.payload
            }
        }
        case 'SET_SEARCHED_WORD':{
            return {
                ...state,
                searchedWord: action.payload
            }
        }
        
        default:
            return state;
    }
}

export default products