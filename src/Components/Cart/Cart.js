import React, { useState, useEffect } from "react";
import * as Elem from "../../Elements/Cart";
import { AnimatePresence, motion } from "framer-motion";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import cartStore from "../../Store/CartStore";
import {
  figureDelete,
  figureUpdate,
  emptyCart,
} from "../../Reducer/actionsCreator";
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const clicked = () => {
    setIsOpen((prevState) => !prevState);
  };

  const getFullPrice = ({ price, amount }) => {
    return price * amount;
  };

  cartStore.subscribe(() => setMyCart(cartStore.getState()));

  useEffect(() => {
    setMyCart(cartStore.getState());
  }, []);
  return (
    <Elem.CartWrapper>
      <Elem.ShowCart onClick={clicked}>
        <GiShoppingCart />
        <span>
          <AiOutlineDoubleLeft />
        </span>
      </Elem.ShowCart>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Elem.CartClicked>
              <Elem.CartBar>
                <Elem.Close onClick={clicked}>
                  Close{" "}
                  <span>
                    <AiOutlineDoubleRight />
                  </span>
                </Elem.Close>
                <p>
                  YOUR ORDERS:
                  <span>
                    {cartStore.getState().length}
                    <GiShoppingCart />
                  </span>
                </p>
              </Elem.CartBar>
              <Elem.ListWrapper>
                <button
                  className="clear-cart"
                  onClick={() => cartStore.dispatch(emptyCart())}
                >
                  Clear Cart
                </button>
                <Elem.Ul>
                  <Elem.Li>
                    <Elem.Name>Name:</Elem.Name>
                    <Elem.Amount>Amount:</Elem.Amount>
                    <Elem.Price>Price:</Elem.Price>
                    <span>Delete</span>
                  </Elem.Li>
                  {myCart.length === 0 ? (
                    <div>
                      Your cart is empty!
                      <p>
                        Go to <a href="#shop">Shop</a> to buy something.
                      </p>
                    </div>
                  ) : (
                    myCart.map((item) => {
                      return (
                        <Elem.Li>
                          <Elem.Name>
                            Overwatch {item.name} Funko Pop! Vinyl
                          </Elem.Name>
                          <Elem.Amount>
                            <Elem.AmountWrapper>
                              <input
                                type="number"
                                min="1"
                                defaultValue={item.amount}
                              />
                              <button
                                onClick={(event) =>
                                  cartStore.dispatch(
                                    figureUpdate(
                                      item.name,
                                      event.target.previousSibling.valueAsNumber
                                    )
                                  )
                                }
                              >
                                add
                              </button>
                            </Elem.AmountWrapper>
                          </Elem.Amount>
                          <Elem.Price>${getFullPrice(item)}</Elem.Price>
                          <Elem.Del
                            onClick={() =>
                              cartStore.dispatch(figureDelete(item.name))
                            }
                          >
                            X
                          </Elem.Del>
                        </Elem.Li>
                      );
                    })
                  )}
                </Elem.Ul>
              </Elem.ListWrapper>
            </Elem.CartClicked>
          </motion.div>
        )}
      </AnimatePresence>
    </Elem.CartWrapper>
  );
};

export default Cart;
