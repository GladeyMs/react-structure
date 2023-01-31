import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { loading } from './loadingReducer'

const rootReducer = combineReducers({
	[loading.name]: loading.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

let persistor = persistStore(store)

export { persistor, store }
