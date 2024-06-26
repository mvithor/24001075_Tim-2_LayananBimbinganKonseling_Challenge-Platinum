<<<<<<< HEAD
import React, { useState } from 'react';
import { CardContent, Grid, Typography, MenuItem, Box, Avatar, Button, Stack } from '@mui/material';
import axios from 'axios';
=======
import React from 'react';
import { CardContent, Grid, Typography, MenuItem, Box, Avatar, Button, Stack } from '@mui/material';
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0

// components
import BlankCard from '../../shared/BlankCard';
import CustomTextField from '../../forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../forms/theme-elements/CustomFormLabel';
import CustomSelect from '../../forms/theme-elements/CustomSelect';

// images
import user1 from 'src/assets/images/profile/user-1.jpg';

// locations
const locations = [
<<<<<<< HEAD
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'india', label: 'India' },
  { value: 'russia', label: 'Russia' },
=======
  {
    value: 'us',
    label: 'United States',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'russia',
    label: 'Russia',
  },
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
];

// currency
const currencies = [
<<<<<<< HEAD
  { value: 'us', label: 'US Dollar ($)' },
  { value: 'uk', label: 'United Kingdom (Pound)' },
  { value: 'india', label: 'India (INR)' },
  { value: 'russia', label: 'Russia (Ruble)' },
];

const AccountTab = () => {
  const [location, setLocation] = useState('india');
  const [currency, setCurrency] = useState('india');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(user1);

  const handleChange1 = (event) => setLocation(event.target.value);
  const handleChange2 = (event) => setCurrency(event.target.value);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      alert('Pilih file untuk diupload');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const studentId = 'student_id_here'; // replace with actual student ID
      const response = await axios.post(`/profile/upload/${studentId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(response.data.url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
=======
  {
    value: 'us',
    label: 'US Dollar ($)',
  },
  {
    value: 'uk',
    label: 'United Kingdom (Pound)',
  },
  {
    value: 'india',
    label: 'India (INR)',
  },
  {
    value: 'russia',
    label: 'Russia (Ruble)',
  },
];

const AccountTab = () => {
  const [location, setLocation] = React.useState('india');

  const handleChange1 = (event) => {
    setLocation(event.target.value);
  };

  //   currency
  const [currency, setCurrency] = React.useState('india');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
  };

  return (
    <Grid container spacing={3}>
      {/* Change Profile */}
      <Grid item xs={12} lg={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5" mb={1}>
              Change Profile
            </Typography>
            <Typography color="textSecondary" mb={3}>Change your profile picture from here</Typography>
            <Box textAlign="center" display="flex" justifyContent="center">
              <Box>
                <Avatar
<<<<<<< HEAD
                  src={imageUrl}
                  alt="Profile"
=======
                  src={user1}
                  alt={user1}
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                  sx={{ width: 120, height: 120, margin: '0 auto' }}
                />
                <Stack direction="row" justifyContent="center" spacing={2} my={3}>
                  <Button variant="contained" color="primary" component="label">
                    Upload
<<<<<<< HEAD
                    <input hidden accept="image/*" type="file" onChange={handleFileChange} />
=======
                    <input hidden accept="image/*" multiple type="file" />
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                  </Button>
                  <Button variant="outlined" color="error">
                    Reset
                  </Button>
                </Stack>
<<<<<<< HEAD
                <Button variant="contained" color="primary" onClick={handleUpload}>Upload Profile Image</Button>
=======
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                <Typography variant="subtitle1" color="textSecondary" mb={4}>
                  Allowed JPG, GIF or PNG. Max size of 800K
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>
<<<<<<< HEAD
      {/* Change Password */}
=======
      {/*  Change Password */}
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
      <Grid item xs={12} lg={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5" mb={1}>
              Change Password
            </Typography>
            <Typography color="textSecondary" mb={3}>To change your password please confirm here</Typography>
            <form>
<<<<<<< HEAD
              <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-cpwd">
                Current Password
              </CustomFormLabel>
              <CustomTextField id="text-cpwd" variant="outlined" fullWidth type="password" />
              <CustomFormLabel htmlFor="text-npwd">New Password</CustomFormLabel>
              <CustomTextField id="text-npwd" variant="outlined" fullWidth type="password" />
              <CustomFormLabel htmlFor="text-conpwd">Confirm Password</CustomFormLabel>
              <CustomTextField id="text-conpwd" variant="outlined" fullWidth type="password" />
=======
              <CustomFormLabel
                sx={{
                  mt: 0,
                }}
                htmlFor="text-cpwd"
              >
                Current Password
              </CustomFormLabel>
              <CustomTextField
                id="text-cpwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
              {/* 2 */}
              <CustomFormLabel htmlFor="text-npwd">New Password</CustomFormLabel>
              <CustomTextField
                id="text-npwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
              {/* 3 */}
              <CustomFormLabel htmlFor="text-conpwd">Confirm Password</CustomFormLabel>
              <CustomTextField
                id="text-conpwd"
                value="MathewAnderson"
                variant="outlined"
                fullWidth
                type="password"
              />
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
            </form>
          </CardContent>
        </BlankCard>
      </Grid>
      {/* Edit Details */}
      <Grid item xs={12}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5" mb={1}>
              Personal Details
            </Typography>
            <Typography color="textSecondary" mb={3}>To change your personal detail , edit and save from here</Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-name">
                    Your Name
                  </CustomFormLabel>
                  <CustomTextField id="text-name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-store-name">
                    Store Name
                  </CustomFormLabel>
                  <CustomTextField id="text-store-name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-location">
=======
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-name"
                  >
                    Your Name
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-name"
                    value="Mathew Anderson"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 2 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-store-name"
                  >
                    Store Name
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-store-name"
                    value="Maxima Studio"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 3 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-location"
                  >
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                    Location
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="text-location"
                    variant="outlined"
                    value={location}
                    onChange={handleChange1}
                  >
                    {locations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-currency">
=======
                  {/* 4 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-currency"
                  >
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                    Currency
                  </CustomFormLabel>
                  <CustomSelect
                    fullWidth
                    id="text-currency"
                    variant="outlined"
                    value={currency}
                    onChange={handleChange2}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} sm={6}>
<<<<<<< HEAD
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-email">
                    Email
                  </CustomFormLabel>
                  <CustomTextField id="text-email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-phone">
                    Phone
                  </CustomFormLabel>
                  <CustomTextField id="text-phone" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel sx={{ mt: 0 }} htmlFor="text-address">
                    Address
                  </CustomFormLabel>
                  <CustomTextField id="text-address" variant="outlined" fullWidth />
=======
                  {/* 5 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-email"
                  >
                    Email
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-email"
                    value="info@modernize.com"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 6 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-phone"
                  >
                    Phone
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-phone"
                    value="+91 12345 65478"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* 7 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="text-address"
                  >
                    Address
                  </CustomFormLabel>
                  <CustomTextField
                    id="text-address"
                    value="814 Howard Street, 120065, India"
                    variant="outlined"
                    fullWidth
                  />
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </BlankCard>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }} mt={3}>
          <Button size="large" variant="contained" color="primary">
            Save
          </Button>
          <Button size="large" variant="text" color="error">
            Cancel
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AccountTab;
