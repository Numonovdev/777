import { combineReducers, createStore, applyMiddleware } from "redux";
import themeReducer from "./themeReducer";
import cartReducer from "./cartReducer";
import languagesReducer from "./languagesReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    cart: cartReducer,
    language: languagesReducer,
});

export const store = createStore(
    rootReducer
);
