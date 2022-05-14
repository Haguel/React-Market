const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalAmount: 0,
    isEmpty: true,
}


const cart = (state = initialState, action) => {
    const validatePrice = (price) => parseFloat(price.toFixed(2))

    const calculateTotalPrice = (arr) => {
        let sum = 0
        arr.forEach((item) => sum += item.totalPrice)
        return sum
    }

    switch(action.type){
        case 'ADD_ITEM':{
            let item = action.payload
            let newItems = state.cartItems

            let itemID = -1
            newItems.forEach((cartItem, id) => {
                if(cartItem.title === item.title) itemID = id
            })

            if(itemID !== -1) {
                newItems[itemID].amount++
                newItems[itemID].totalPrice = validatePrice(newItems[itemID].totalPrice + item.price)
            }
            else {
                item.amount = 1
                item.totalPrice = item.price
                newItems.push(item)
            }
  
            return{
                cartItems: newItems,
                totalPrice: calculateTotalPrice(newItems),
                totalAmount: newItems.length,
                isEmpty: newItems.length === 0 ? true : false
            }
        }

        case 'SET_AMOUNT': {
            let input = action.payload.input 
            const id = action.payload.id 
            let newItems = state.cartItems

            if(input === "+"){
                newItems[id].amount++
                newItems[id].totalPrice = validatePrice(newItems[id].totalPrice + newItems[id].price)
            } 
            else if(input === "-") {  
                if(newItems[id].amount !== 1) {
                    newItems[id].amount--
                    newItems[id].totalPrice = validatePrice(newItems[id].totalPrice - newItems[id].price)
                }
                else{
                    newItems.splice(id, 1)
                }
            } 
            else { // Если пользователь сам ввел значение
                newItems[id].amount = input
                newItems[id].totalPrice = validatePrice(newItems[id].price * input)
            }
            return {
                cartItems: newItems,
                totalPrice: calculateTotalPrice(newItems),
                totalAmount: newItems.length,
                isEmpty: newItems.length === 0 ? true : false
            }
        }
        case 'REMOVE_ITEM': {
            let newItems = state.cartItems
            newItems.splice(action.payload, 1)
            return {
                cartItems: newItems,
                totalPrice: calculateTotalPrice(newItems),
                totalAmount: newItems.length,
                isEmpty: newItems.length === 0 ? true : false
            }
        }

        case 'EMPTY_CART': {
            return {
                cartItems: [],
                totalPrice: 0,
                totalAmount: 0,
                isEmpty: true,
            }
        }
        default:
            return{
                ...state
            }
    }
}

export default cart