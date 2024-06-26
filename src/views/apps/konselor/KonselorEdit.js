import React from 'react';
import KonselorEdit from 'src/components/apps/konselor/KonselorEdit';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';



const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard'
  },
  {
    title: 'Form Edit Konselor'
  }
];

const Konselor = () => {
  return (  
    <PageContainer title='Form Edit Konselor' description='Halaman Edit Konselor'>
      <Breadcrumb title="Form Edit Konselor" items={BCrumb}/>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <KonselorEdit/>
      </Grid>
      </Grid>

    </PageContainer>
      
    
  );
};

export default Konselor;
