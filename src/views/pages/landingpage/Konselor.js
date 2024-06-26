import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Footer from '../../../components/landingpage/Footer';
import LpHeader from '../../../components/landingpage/Header';
import ImgCarousel from '../../../components/landingpage/home/carousel/Carousel';
// import Banner from '../../../components/landingpage/home/banner/Banner'
import DetailKonselor from '../../../components/landingpage/Konselor/Konselor'

const LandingPage = () => {
  return (
    <PageContainer title="Kata Konselor" description="testimoni konselor">
      <LpHeader />
      <ImgCarousel />
      <DetailKonselor />     
      <Footer />
    </PageContainer>
  );
};

export default LandingPage;