import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Data Siswa',
  },
];

const BreadcrumbComponent = () => (
  <Breadcrumb title="Data Siswa" items={BCrumb} />
);

export default BreadcrumbComponent;
