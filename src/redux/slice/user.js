import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    loginSuccess: (state, action) => {
      return (state.user = action.payload);
    },
    logoutSuccess: (state, action) => {
      return (state.user = null);
    },
  },
});
export const { loginSuccess, logoutSuccess } = slice.actions;

export default slice.reducer;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess(null, null));
  } catch (e) {
    return console.error(e.message);
  }
};
