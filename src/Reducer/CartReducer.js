import * as actions from "./actionTypes";

import data from "../HeroData/data";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.GET_CART:
      return [...state];
    case actions.ADD_TO_CART:
      let { name, index = 0 } = action.payload;
      if (index === null) index = 0;
      let newItem = data.find((item) => item.name === name);
      newItem = newItem.figures[index];
      return [...state, { ...newItem, amount: 1 }];
    case actions.UPDATE_CART_ITEM:
      return state.map((item) =>
        item.name !== action.payload.name
          ? item
          : { ...item, amount: action.payload.amount }
      );
    case actions.DELETE_CART_ITEM:
      return state.filter((item) => item.name !== action.payload.name);
    case actions.EMPTY_CART:
      return [];
    default:
      return state;
  }
}
