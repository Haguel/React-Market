import axios from "axios"

export const fetchProducts = (sortOptions, dispatch) => {  

    if(sortOptions.productType == ''){
        axios
        .get(`http://localhost:8000/products?_sort=${sortOptions.item}&_order=${sortOptions.method}`)
        .then(({ data }) => {
            dispatch(setProducts(data));
        });
    } else {
        axios
        .get(`http://localhost:8000/products?_sort=${sortOptions.item}&_order=${sortOptions.method}&type=${sortOptions.productType}`)
        .then(({ data }) => {
            dispatch(setProducts(data));
        });
    }
}  

export const setProducts = (items) => ({
    type: "SET_PRODUCTS",
    payload: items
})

export const setSearchedWord = (word) => ({
    type: "SET_SEARCHED_WORD",
    payload: word,
})

