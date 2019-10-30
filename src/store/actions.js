import { ACTION_TYPES } from './actionTypes';
import { initialProducts } from '../api/initialProducts';

export const loadData = () => ({
  type: ACTION_TYPES.LOAD_DATA,
  payload: initialProducts,
});

export const submitName = (name) => ({
  type: ACTION_TYPES.SUBMIT_NAME,
  payload: name,
});

export const deleteItem = (id) => ({
  type: ACTION_TYPES.DELETE_ITEM,
  payload: id,
});

export const showDetails = (id) => ({
  type: ACTION_TYPES.SHOW_DETAILS,
  payload: id,
});

export const addNewProduct = (newProduct) => ({
  type: ACTION_TYPES.ADD_NEW_PRODUCT,
  payload: newProduct,
});
