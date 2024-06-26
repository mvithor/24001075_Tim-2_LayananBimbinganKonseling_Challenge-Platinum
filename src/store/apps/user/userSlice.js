import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  role: '',
  accessToken: '',
<<<<<<< HEAD
  userId: null, 
=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
<<<<<<< HEAD
      const { name, role, accessToken, userId } = action.payload; 
      state.name = name;
      state.role = role;
      state.accessToken = accessToken;
      state.userId = userId; 
=======
      const { name, role, accessToken } = action.payload;
      state.name = name;
      state.role = role;
      state.accessToken = accessToken;
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
    },
    clearUser(state) {
      state.name = '';
      state.role = '';
      state.accessToken = '';
<<<<<<< HEAD
      state.userId = null; 
=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
    },
  },
});

<<<<<<< HEAD

=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
