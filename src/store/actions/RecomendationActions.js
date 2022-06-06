import { PortfolioActions } from "../slices/RecomendationSlice";
import { getPortfolioByProfile, getPortfolios } from "../../services/utils.service";

export const fetchAllPortfolios = () => {
  return async (dispatch) => {
    try {
      const portfoliosData = await getPortfolios();
      // console.log(portfoliosData);
      dispatch(PortfolioActions.replaceAllPortfolios(portfoliosData));
    } catch (err) {

    }
  };
};

export const fetchRecomendedPortfolio = () => {
  return async (dispatch, getState) => {
    try {
      const { user } = getState();
      
      const portfolioData = await getPortfolioByProfile(
      user.data.risk_profile,
      user.data.values,
      user.createdGoal.duration
      );
      dispatch(PortfolioActions.replaceRecomendedPortfolios(portfolioData));
    } catch (err) {
      console.log(err)
    }
  };
};
