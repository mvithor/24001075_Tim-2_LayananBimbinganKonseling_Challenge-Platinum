import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Banner from '../../../components/landingpage/home/banner/Banner1';
import ContentLayanan from 'src/components/landingpage/home/contentLayanan/contentLayanan';
import Footer from '../../../components/landingpage/Footer';
import LpHeader from 'src/components/landingpage/Header';


const LayananKami = () => {
  return (
    <PageContainer title="Layanan Kami" description="This is Our Services">
      <LpHeader />
      <Banner />
      <ContentLayanan/>
      <Footer />
    </PageContainer>
  );
};

export default LayananKami;
