import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  role: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { name, role, accessToken } = action.payload;
      state.name = name;
      state.role = role;
      state.accessToken = accessToken;
    },
    clearUser(state) {
      state.name = '';
      state.role = '';
      state.accessToken = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
