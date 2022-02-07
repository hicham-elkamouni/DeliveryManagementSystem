import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import usersReducer from "./features/auth/userSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, usersReducer)
export const store = configureStore({
    reducer: {
        user: persistedReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch