import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Footer from '../../../components/landingpage/Footer';
import LpHeader from 'src/components/landingpage/Header';
<<<<<<< HEAD
import Literasi from 'src/components/landingpage/literasi/literasi';
=======
import Literasi from 'src/components/landingpage/Literasi/literasi';
>>>>>>> 93592626ecf30555c2fa51824a6f3f1d181ee2c0

const LiterasiViews = () => {
    return (
      <PageContainer title="Tentang Kami" description="This is About Us">
        <LpHeader />
        <Literasi/>
        <Footer />
      </PageContainer>
    );
  };
  
  export default LiterasiViews;