import { ACTION_TYPES } from './actionTypes';

const initialState = localStorage['redux-store']
  ? JSON.parse(localStorage['redux-store'])
  : {
    name: '',
    listOfProducts: [],
    productDetails: {},
  };

// eslint-disable-next-line import/prefer-default-export
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_DATA:
      return {
        ...state,
        listOfProducts: [...action.payload],
      };
    case ACTION_TYPES.SUBMIT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        listOfProducts: [...state.listOfProducts].filter((item) => item.id !== action.payload),
      };
    case ACTION_TYPES.SHOW_DETAILS:
      return {
        ...state,
        productDetails: [...state.listOfProducts].find((item) => item.id === action.payload),
      };
    case ACTION_TYPES.ADD_NEW_PRODUCT:
      return {
        ...state,
        listOfProducts: [...state.listOfProducts, action.payload],
      };
    default:
      return state;
  }
};
