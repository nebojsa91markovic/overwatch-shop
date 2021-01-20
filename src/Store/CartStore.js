import { createStore } from "redux";
import reducer from "../Reducer/CartReducer";

const cartStore = createStore(reducer);

export default cartStore;
