import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

export const store = createStore(reducers, composeWithDevTools());

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState());
});
