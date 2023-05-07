import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { SET_DATA, UPLOAD_FILE } from './actions';

const initialState = {
  name: '',
  newName: '',
  affidavit: '',
  publication: '',
  persons: '',
  transactionId: '',
  imageData:'',
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
        persons: action.payload.persons,
        transactionId: action.payload.transactionId,
        imageData: action.payload.imageData,
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

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);

export default store;
