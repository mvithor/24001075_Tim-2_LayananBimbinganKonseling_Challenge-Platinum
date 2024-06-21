import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Banner from '../../../components/landingpage/home/banner/BannerTentang';
import ContentTentang from 'src/components/landingpage/home/ContentTentangKami/contentTentangKami';
import Footer from '../../../components/landingpage/Footer';
import LpHeader from 'src/components/landingpage/Header';


const TentangKami = () => {
  return (
    <PageContainer title="Tentang Kami" description="This is About Us">
      <LpHeader />
      <Banner />
      <ContentTentang/>
      <Footer />
    </PageContainer>
  );
};

export default TentangKami;
