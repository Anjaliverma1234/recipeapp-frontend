import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import { thunk } from 'redux-thunk';
import authSlice from '../features/auth/authSlice';

const store = configureStore(
        {
            reducer:{
            user:authSlice,
            },
        },
        applyMiddleware(thunk),
);
export default store;