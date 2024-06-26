import React from 'react';
import { Grid, Box, Container, useMediaQuery, styled } from '@mui/material';
import BannerContent from './BannerTentangKami';
import bannerbg from 'src/assets/images/landingpage/bannerLayanan.svg';



const BannerTentang = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const BackgroundBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bannerbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  }));





  return (
    <Box mb={4} sx={{ overflow: 'hidden', alignContent:'center', alignItems:'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} md={12}>

            {/* </Grid> */}
            {lgUp ? (
              // <Grid item xs={12} lg={6} md={4}>
              <Box
                p={3.2}
                sx={{
                  backgroundColor: ('#ffffff'),
                  position: 'relative',
                  height: '745px',
                  maxHeight: '790px',
                  overflow: 'hidden',
                }}
              >
                

                  
                  {/* <BackgroundBox/> */}
                  <img src={bannerbg} alt="banner" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }} />
                 
                <BannerContent />

              </Box>
              // </Grid>
            ) : <BannerContent />}
          </Grid>
        </Grid>
      </Container >
    </Box >
  );
};

export default BannerTentang;
