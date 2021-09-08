import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({ reducer });

export const persistor = persistStore(store);

const stores = { store, persistor };
export default stores;
