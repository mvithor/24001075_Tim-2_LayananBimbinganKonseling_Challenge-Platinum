import React from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Dashboard',
  },
  {
    title: 'Form Edit Kelas',
  },
];

const BreadcrumbKelasEdit = () => (
  <Breadcrumb title="Form Edit Siswa" items={BCrumb} />
);

export default BreadcrumbKelasEdit;
