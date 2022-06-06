import axios from "axios";

const API_URL = "http://localhost:4000/";

// portfolio services
export const getPortfolios = async () => {
  try {
    const response = await axios.get(API_URL + "portfolios");
    // console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getPortfolioByProfile = async (
  risk_profile,
  values,
  duration
) => {
  try {
    const body = {
      risk_profile: risk_profile,
      personal_values: values,
      invest_duration: duration,
    };
    const response = await axios.post(
      API_URL + "recomendPortfolio",
      { body },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};
