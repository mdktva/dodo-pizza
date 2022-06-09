import { createStore, combineReducers } from "redux";
import {basketReducer} from "./reducers/basketReducer";
import {pizzasReducer} from "./reducers/pizzasReducer";
import { authReducer } from "./authReducer";


const reducers = combineReducers({
    pizzas: pizzasReducer,
    basket: basketReducer,
    auth: authReducer,
});

export const store = createStore(reducers);

store.subscribe(() => {
    const redux = store.getState();
    console.log(redux)
    localStorage.setItem("basket", JSON.stringify(redux.basket.data))
    localStorage.setItem("pizzas", JSON.stringify(redux.basket.data))
    localStorage.setItem("auth", JSON.stringify(redux.auth.data))


});

window.store = store;


// const reducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case "PLUS":
//             return { count: state.count + 1 }
//         case "MINUS":
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }