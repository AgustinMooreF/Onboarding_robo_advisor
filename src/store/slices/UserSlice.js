import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      score: 0,
      risk_profile: "Conservador",
      values: ["CC"]
    },
    createdGoal: {
      title: "",
      description: "",
      duration: 1,
      picture: "",
      amount: 0,
      portfolioId: null,
      userUuid: null,
    },
    currentStep:0
  },
  reducers: {
      replaceRegisterData(state, action) {
        state.data.first_name =action.payload.first_name;
        state.data.last_name =action.payload.last_name;
        state.data.email =action.payload.email;
        state.data.password =action.payload.password;
        state.data.passwordConfirm =action.payload.passwordConfirm;
      },
      replaceProfileData(state, action) {
        state.data.risk_profile = action.payload.risk_profile;
        state.data.score = action.payload.score;
      },
      replaceGoalBasicData(state, action) {
        state.createdGoal.title = action.payload.title;
        state.createdGoal.duration = action.payload.duration;
        state.createdGoal.amount = action.payload.amount;
      },
      replaceGoalfinalData(state, action) {
        state.createdGoal.portfolioId = action.payload.portfolioId;
        state.createdGoal.userUuid = action.payload.userUuid;
      },
      userValues(state, action){
        state.data.values = action.payload.values;
      },
      nextStep(state,action){
        state.currentStep = state.currentStep + 1;
      },
      stepBack(state, action){
        state.currentStep = state.currentStep - 1;
      },
},
});

export const userActions = userSlice.actions;

export default userSlice;