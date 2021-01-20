import * as actions from "./actionTypes";

import data from "../HeroData/data";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.GET_HERO:
      return data.filter((item) => item.id === action.payload.id)[0];
    case actions.GET_CART:
      return [...state];
    case actions.ADD_TO_CART:
      return [...state, action.payload];
    case actions.UPDATE_CART_ITEM:
      return state.map((item) =>
        item.id !== action.payload.id
          ? item
          : { ...item, amount: action.payload.amount }
      );
    case actions.DELETE_CART_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case actions.EMPTY_CART:
      return [];
    default:
      return data;
  }
}
