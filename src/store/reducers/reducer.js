import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storageSession from 'redux-persist/lib/storage/session';

import AuthReducer from '../slices/auth';

const persistConfig = {
	key: 'root',
	storage: storageSession,
	whiteList: ['auth']
};

const rootReducer = combineReducers({
	auth: AuthReducer
});

export default persistReducer(persistConfig, rootReducer);
