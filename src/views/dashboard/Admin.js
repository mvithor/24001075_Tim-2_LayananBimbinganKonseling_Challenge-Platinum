import React from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import TopCards from '../../components/dashboards/TopCards';
import WelcomeCard from 'src/components/dashboards/WelcomeCard';
import RevenueUpdates from '../../components/dashboards/RevenueUpdates';
import YearlyBreakup from '../../components/dashboards/YearlyBreakup';
import MonthlyEarnings from '../../components/dashboards/MonthlyEarnings';
import EmployeeSalary from '../../components/dashboards/EmployeeSalary';
import Customers from '../../components/dashboards/Customers';
import Projects from '../../components/dashboards/Projects';
import Social from '../../components/dashboards/Social';
import SellingProducts from '../../components/dashboards/SellingProducts';
import WeeklyStats from '../../components/dashboards/WeeklyStats';
import TopPerformers from '../../components/dashboards/TopPerformers';
import Welcome from 'src/layouts/full/shared/welcome/Welcome';



const Admin = () => {
  // const [name, setName] = useState('');
  // const [token, setToken] = useState('');
  // const [expire, setExpire] = useState('');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/auth/token');
  //     setToken(response.data.accessToken);
  //     const decoded = jwtDecode(response.data.accessToken);
  //     setName(decoded.name);
  //     setExpire(decoded.exp)
  //   } catch (error) {
  //     if(error.response){
  //       navigate('/auth/login');

  //     }
  //   }
  // }
  // const axiosJWT  = axios.create();

  // axiosJWT.interceptors.request.use(async(config) => {
  //   const currentDate = new Date()
  //   if(expire * 1000 < currentDate.getTime()){
  //     const response = await axios.get('http://localhost:4000/token');
  //     config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //     setToken(response.data.accessToken);
  //     const decoded = jwtDecode(response.data.accessToken);
  //     setName(decoded.name);
  //     setExpire(decoded.exp)
  //   }
  //   return config;
  // }, (error)=> {
  //     return Promise.reject(error)
  // })

  return (
    <Box>
      <Grid container spacing={3}>
        {/* column */}
        <Grid item sm={12} lg={12}>
         <WelcomeCard />
          <TopCards />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={8}>
          <RevenueUpdates />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={12}>
              <YearlyBreakup />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <MonthlyEarnings />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <EmployeeSalary />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Customers />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Projects />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <SellingProducts />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={4}>
          <WeeklyStats />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={8}>
          <TopPerformers />
        </Grid>
      </Grid>
      {/* column */}
      <Welcome />
    </Box>
  );
};

export default Admin;
