import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Footer from '../../../components/landingpage/Footer';
import LpHeader from 'src/components/landingpage/Header';
import Literasi from 'src/components/landingpage/Literasi/literasi';


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