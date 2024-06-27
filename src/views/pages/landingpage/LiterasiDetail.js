import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Footer from '../../../components/landingpage/Footer';
import LpHeader from 'src/components/landingpage/Header';
import LiterasiDetail from 'src/components/landingpage/Literasi/LiterasiDetail';

const LiterasiDetailViews = () => {
    return (
      <PageContainer title="Literasi Detail" description="Literasi Detail">
        <LpHeader />
        <LiterasiDetail/>
        <Footer />
      </PageContainer>
    );
  };
  
  export default LiterasiDetailViews;