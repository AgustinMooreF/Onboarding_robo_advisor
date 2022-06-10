import axios from "axios";

const API_URL = "http://localhost:4000/";
export const register = async (
  firstName,
  lastName,
  email,
  password,
  passwordConfirm
) => {
  try {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    const response = await axios.post(
      API_URL + "signup",
      { body },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
