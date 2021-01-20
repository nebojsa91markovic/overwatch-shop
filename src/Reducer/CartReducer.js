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
      let isAlreadyInCart = false;
      [...state].forEach((elem) => {
        if (elem.name.includes(name) && elem.figureIndex === index) {
          isAlreadyInCart = true;
        }
      });

      if (isAlreadyInCart) {
        return [...state].map((item) =>
          item.name.includes(name) && item.figureIndex === index
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        return [...state, { ...newItem, amount: 1, figureIndex: index }];
      }

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
