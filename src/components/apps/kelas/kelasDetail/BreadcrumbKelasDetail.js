import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Data Siswa Kelas',
  },
];

const BreadcrumbKelasDetail = () => (
  <Breadcrumb title="Data Siswa Kelas" items={BCrumb} />
);

export default BreadcrumbKelasDetail;
