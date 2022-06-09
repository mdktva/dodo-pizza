
import { SET_ALL_PIZZA } from './../ActionTypes';


const initialState = {
    pending: true,
    data: JSON.parse(localStorage.getItem("pizzas")) || [],
}
export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PIZZA:
            return { ...state, data: action.payload }
        default:
            return state;
    }

}