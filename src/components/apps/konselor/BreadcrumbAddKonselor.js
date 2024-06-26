import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Tambah Data Konselor',
  },
];

const BreadcrumbAddKonselor = () => (
  <Breadcrumb title="Tambah Data Konselor" items={BCrumb} />
);

export default BreadcrumbAddKonselor;
