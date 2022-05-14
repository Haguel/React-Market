const initialState = {
    isCatalogueOpen: false,
    productTypes: [
        {
            option: "",
            title: "Все",
            isActive: true,
        },
        {
            option: "vegetable",
            title: "Овощи",
            isActive: false,
        },
        {
            option: "fruit",
            title: "Фрукты",
            isActive: false,
        },
        {
            option: "berry",
            title: "Ягоды",
            isActive: false,
        },
    ]
}

const catalogue = (state = initialState, action) => {
    switch(action.type){
        case "SET_CATALOGUE":
            return{
                ...state,
                isCatalogueOpen: !state.isCatalogueOpen
            }
        case "SET_CATALOGUE_ACTIVE_TYPE":
            const newProductTypes = state.productTypes

            newProductTypes.forEach((type, id) => {
                id === action.payload ? type.isActive = true : type.isActive = false
            });
            return{
                ...state,
                productTypes: newProductTypes
            }
        default:
            return{
                ...state,
            }
    }
}

export default catalogue