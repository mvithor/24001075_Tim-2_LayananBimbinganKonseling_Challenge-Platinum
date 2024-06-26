<<<<<<< HEAD
// src/layouts/full/vertical/header/Header.js
=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
import React from 'react';
import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons';

// components
import Notifications from './Notifications';
<<<<<<< HEAD
import ProfileAdmin from './ProfileAdmin';
import ProfileSiswa from './ProfileSiswa';
=======
import Profile from './Profile';
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0

const Header = () => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

<<<<<<< HEAD
=======

>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
  // drawer
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();

<<<<<<< HEAD
  // role
  const role = useSelector((state) => state.user.role);

=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
<<<<<<< HEAD
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
=======
  const ToolbarStyled = styled(Toolbar)(({theme}) => ({
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" />
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Notifications />
<<<<<<< HEAD
          {role === 'admin' ? <ProfileAdmin /> : <ProfileSiswa />}
=======
          <Profile />
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;
