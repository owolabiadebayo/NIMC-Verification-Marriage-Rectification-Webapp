import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SET_DATA } from './actions';

const initialState = {
  name: '',
  newName: '',
  affidavit: '',
  publication: '',
  notified: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        newName: action.payload.newName,
        affidavit: action.payload.affidavit,
        publication: action.payload.publication,
        notified: action.payload.notified,
      };
      default:
      return state;
  }
};

const rootReducer = combineReducers({
  mainReducer: reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
