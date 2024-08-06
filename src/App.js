import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import { log } from "xstate/lib/actions";

const types = {
  show: "SHOW",
  addToCart: "ADDTOCART",
  removeFromCart: "REMOVEFROMCART",
  removeOneFromCart: "REMOVEONEFROMCART",
};
const reducer = (state, action) => {
  switch (action.type) {
    case types.show:
      return state;
    case types.addToCart:
      return state;
    case types.removeFromCart:
      return state;
    case types.removeOneFromCart:
      return state;
    default:
      return state;
  }
};
const initialState = {
  list: [
    { id: 1, title: "product #1" },
    { id: 2, title: "product #2" },
    { id: 3, title: "product #3" },
    { id: 4, title: "product #4" },
    { id: 5, title: "product #5" },
    { id: 6, title: "product #6" },
    { id: 7, title: "product #7" },
  ],
  cart: [],
  activeProduct: {},
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { list, cart, activeProduct } = state;
  console.log(state);
  l;
  return <div>App</div>;
};

export default App;
