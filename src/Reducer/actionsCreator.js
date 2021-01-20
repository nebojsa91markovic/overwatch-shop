import * as actions from "./actionTypes";

export function figureAdd(index, amount, name) {
  return {
    type: actions.ADD_TO_CART,
    payload: {
      index,
      amount,
      name,
    },
  };
}
export function figureUpdate(name, amount) {
  return {
    type: actions.UPDATE_CART_ITEM,
    payload: {
      name,
      amount,
    },
  };
}
export function figureDelete(name) {
  return {
    type: actions.DELETE_CART_ITEM,
    payload: {
      name,
    },
  };
}

export function emptyCart() {
  return {
    type: actions.EMPTY_CART,
  };
}
