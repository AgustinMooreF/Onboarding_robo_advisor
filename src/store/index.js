
import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './slices/RecomendationSlice';
import userSlice from './slices/UserSlice';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        portfolios: portfolioSlice.reducer,
        user: userSlice.reducer,
    },
    });

export default store;