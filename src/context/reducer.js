export const initialState = {
  cart: [],
  ordersList: [],
  totalQuantity: 0,
  totalAmount: 0,
  userData: null,
  userName: null,
  selectedCategory: null,
  selectedProduct: null,
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTEDCATEGORY":
      return {
        ...state,
        selectedCategory: action.category,
      };

    case "SET_SELECTEDPRODUCT":
      return {
        ...state,
        selectedProduct: action.product,
      };

    case "ADD_TO_CART":
      console.log("ADD_TO_CART - ", action.item);
      return {
        ...state,
        cart: [...state.cart, action.item],
        totalQuantity:
          parseInt(state.totalQuantity) + parseInt(action.item.quantity),
        totalAmount: state.totalAmount + action.item.total,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SUBMIT_ORDER":
      return {
        ...state,
        ordersList: [...state.ordersList, action.data],
        cart: [],
        totalQuantity: 0,
        totalAmount: 0,
      };

    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", action.index);
      const index = action.index;
      const removingQuantity = state.cart[index].quantity;
      const removingTotal = state.cart[index].total;
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return {
        ...state,
        cart: newCart,
        totalQuantity:
          parseInt(state.totalQuantity) - parseInt(removingQuantity),
        totalAmount: state.totalAmount - removingTotal,
      };

    case "REMOVE_FROM_ORDERSLIST":
      console.log("REMOVE_FROM_CART", action.index);
      let newOrdersList = [...state.ordersList];

      if (action.index >= 0) {
        newOrdersList.splice(action.index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return {
        ...state,
        ordersList: newOrdersList,
      };

    default:
      return state;
  }
};

export default reducer;
