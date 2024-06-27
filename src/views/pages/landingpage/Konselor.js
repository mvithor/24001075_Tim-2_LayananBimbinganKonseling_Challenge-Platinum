import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import Footer from '../../../components/landingpage/Footer';
import LpHeader from '../../../components/landingpage/Header';
import ImgCarousel from '../../../components/landingpage/home/carousel/Carousel';
import Konselor from '../../../components/landingpage/konselor/Konselor'; 

const Konselor = () => {
  return (
    <PageContainer title="Konselor" description="testimoni konselor">
      <LpHeader />
      <ImgCarousel />
      <Konselor/>  
      <Footer />
    </PageContainer>
  );
};

export default Konselor;
