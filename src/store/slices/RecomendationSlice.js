import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState: {
    allPortfolios: [],
    recomendedPortfolio: {},
  },
  reducers: {
    replaceAllPortfolios(state, action) {
      state.allPortfolios = action.payload;
    },
    replaceRecomendedPortfolios(state, action) {
      state.recomendedPortfolio = action.payload;
    },
  },
});

export const PortfolioActions = portfolioSlice.actions;

export default portfolioSlice;