// import axios from 'axios';

// const API_URL = 'http://localhost:4000';

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     if (response.data.accessToken) {
//       localStorage.setItem('accessToken', response.data.accessToken);
//       return response.data;
//     }
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// export const refreshToken = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/auth/token`);
//     localStorage.setItem('accessToken', response.data.accessToken);
//     return response.data.accessToken;
//   } catch (error) {
//     throw error.response.data;
//   }
// };
