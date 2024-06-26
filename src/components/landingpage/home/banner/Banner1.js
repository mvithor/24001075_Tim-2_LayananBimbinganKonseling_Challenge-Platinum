import React from 'react';
import { Grid, Box, Container, useMediaQuery, styled } from '@mui/material';
import BannerContent from './BannerLayanan';
import bannerbg from 'src/assets/images/landingpage/bannerLayanan.svg';

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${bannerbg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
}));

const Banner = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Box mb={4} sx={{ overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundBox />
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} md={12}>
            {lgUp ? (
              <Box
                p={3.2}
                sx={{
                  backgroundColor: '#ffffff',
                  position: 'relative',
                  height: '745px',
                  maxHeight: '790px',
                  overflow: 'hidden',
                  zIndex: 1,
                }}
              >
                <BannerContent />
              </Box>
            ) : (
              <BannerContent />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
