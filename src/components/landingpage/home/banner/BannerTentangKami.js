import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';


// third party
import { motion } from 'framer-motion';
const BannerContent = () => {
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (
    <Box my={lgDown ? 0 : 0}>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      >

        <Typography
          variant="h4"
          fontWeight={900}
          color={'#2F327D'}
          sx={{
            fontSize: {
              md: '54px',
            },
            lineHeight: {
              md: '60px',
            },
          }}
          textAlign={'center'}
        >
          Tentang Kami
          
         
        </Typography>
      </motion.div>

     </Box>
  );
};

export default BannerContent;
