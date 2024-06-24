import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../assets/images/svgs/icon-user-male.svg';
import icon3 from '../../assets/images/svgs/icon-briefcase.svg';
import icon4 from '../../assets/images/svgs/icon-mailbox.svg';
import icon5 from '../../assets/images/svgs/icon-favorites.svg';
import icon6 from '../../assets/images/svgs/icon-speech-bubble.svg';

const TopCards = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [konselorCount, setKonselorCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [studentResponse, konselorResponse] = await Promise.all([
          axios.get('http://localhost:4000/students/count'),
          axios.get('http://localhost:4000/konselor/count')
        ]);

        setStudentCount(studentResponse.data.count);
        setKonselorCount(konselorResponse.data.count);
      } catch (error) {
        console.error('Error fetching counts', error);
      }
    };

    fetchCounts();
  }, []);


  const topcards = [
    {
      href: '/dashboard/admin/siswa',
      icon: icon2,
      title: 'Siswa',
      digits: studentCount,
      bgcolor: 'primary',
    },
    {
      href: '/dashboard/admin/konselor',
      icon: icon3,
      title: 'Konselor',
      digits: konselorCount,
      bgcolor: 'warning',
    },
    {
      href: '/dashboard/admin/kelas',
      icon: icon4,
      title: 'Kelas',
      digits: '30',
      bgcolor: 'secondary',
    },
    {
      href: '/dashboard/admin/konsultasi',
      icon: icon5,
      title: 'Konsultasi',
      digits: '48',
      bgcolor: 'info',
    },
    {
      href: '/dashboard/admin/prestasi',
      icon: icon6,
      title: 'Prestasi',
      digits: '48',
      bgcolor: 'info',
    },
    {
      href: '/dashboard/admin/pelanggaran',
      icon: icon1,
      title: 'Pelanggaran',
      digits: '48',
      bgcolor: 'info',
    },
  ];

  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Link to={topcard.href}>
            <Box bgcolor={topcard.bgcolor + '.light'} textAlign="center">
              <CardContent>
                <img src={topcard.icon} alt={topcard.icon} width="50" />
                <Typography
                  color={topcard.bgcolor + '.main'}
                  mt={1}
                  variant="subtitle1"
                  fontWeight={600}
                >
                  {topcard.title}
                </Typography>
                <Typography color={topcard.bgcolor + '.main'} variant="h4" fontWeight={600}>
                  {topcard.digits}
                </Typography>
              </CardContent>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
