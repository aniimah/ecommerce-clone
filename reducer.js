
import brushimage from'./makeupbrush.png';


//DATA LAYER LOGIC COMES HERE
export const initialState = {
    basket: [],
    user: null,
};

    export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            //Update the user when they login in..
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logic adding item to basket
            return{
              ...state,
              basket: [...state.basket, action.item]
        };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            //we cloned the basket
            let newBasket = [...state.basket];

            //check to see if product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0 ) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not in basket'
                );
            }

            return{
                    ...state,
                     basket: newBasket 
                  };
        default:
            return state;
    }
}

export default reducer;