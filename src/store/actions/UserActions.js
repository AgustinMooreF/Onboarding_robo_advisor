import { UserActions } from "../slices/UserSlice";
import { register } from "../../services/auth.service";

export const fetchAllPortfolios = () => {
  return async (dispatch, getState) => {
    try {
      const { user } = getState();
      console.log(user);
      const userData = await register(
        user.data.firstName,
        user.data.lastName,
        user.data.email,
        user.data.password,
        user.data.passwordConfirm
      );
      dispatch(UserActions.replaceRegisterData(userData));
    } catch (err) {

    }
  };
};
