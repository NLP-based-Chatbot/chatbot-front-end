import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storageSession from 'redux-persist/lib/storage/session';

import AuthReducer from '../slices/auth';
import EntitiesReducer from './entities';

const persistConfig = {
	key: 'root',
	storage: storageSession,
	whiteList: ['auth', 'entities']
};

const rootReducer = combineReducers({
	auth: AuthReducer,
	entities: EntitiesReducer
});

export default persistReducer(persistConfig, rootReducer);
