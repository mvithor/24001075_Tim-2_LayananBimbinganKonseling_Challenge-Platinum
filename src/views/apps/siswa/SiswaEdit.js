import React from 'react';
import StudentEdit from 'src/components/apps/siswa/SiswaEdit';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';



const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard'
  },
  {
    title: 'Form Edit Siswa'
  }
];

const Student = () => {
  return (  
    <PageContainer title='Form Edit Siswa' description='Halaman Edit Siswa'>
      <Breadcrumb title="Form Edit Siswa" items={BCrumb}/>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <StudentEdit/>
      </Grid>
      </Grid>

    </PageContainer>
      
    
  );
};

export default Student;
