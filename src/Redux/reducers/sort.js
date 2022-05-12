const initialState = {
    sortOptions: {
        item: "title",
        method: "asc",
        productType: "",
    },
    
    sortTypes: [
        {
            item: 'title',
            method: "asc",
            title: "По алфавиту (А - Я)",
            isActive: true,
        },
        {
            item: 'title',
            method: "desc",
            title: "По алфавиту (Я - А)",
            isActive: false,
        },
        {
            item: 'price',
            method: "asc",
            title: "Дешевле",
            isActive: false,
        },
        {
            item: 'price',
            method: "desc",
            title: "Дороже",
            isActive: false,
        },
    ],

    activeSortTitle: "По алфавиту (А - Я)",
}

const sort =  (state = initialState, action) => {
    switch(action.type){
        case 'SET_ACTIVE_SORT': {
            let newActiveSortTitle

            state.sortTypes.forEach((sortType, id) => {
                if(action.payload == id){
                    newActiveSortTitle = sortType.title
                    sortType.isActive = true
                } else {
                    sortType.isActive = false
                }
            })

            const newSortOptions = {
                item: state.sortTypes[action.payload].item,
                method: state.sortTypes[action.payload].method,
                productType: state.sortOptions.productType,
            }
            return {
                ...state,
                sortOptions: newSortOptions,
                activeSortTitle: newActiveSortTitle
            }
        }
        case 'SET_PRODUCT_TYPE': {
            const newSortOptions = {
                item: state.sortOptions.item,
                method: state.sortOptions.method,
                productType: action.payload,
            }
            return {
                ...state,
                sortOptions: newSortOptions
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default sort