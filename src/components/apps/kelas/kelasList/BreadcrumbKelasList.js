import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Data Kelas',
  },
];

const BreadcrumbKelas = () => (
  <Breadcrumb title="Data Kelas" items={BCrumb} />
);

export default BreadcrumbKelas;
