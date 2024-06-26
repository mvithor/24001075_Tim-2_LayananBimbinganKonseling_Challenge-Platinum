import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';


import Loadable from '../layouts/full/shared/loadable/Loadable';
// import { element } from 'prop-types';
// import { element } from 'prop-types';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Dashboards***** */
const DashboardAdmin = Loadable(lazy(() => import('../views/dashboard/Admin')));
const DashboardSiswa = Loadable(lazy(() => import('../views/dashboard/Siswa')))

/* ****Dashboard Admin***** */
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const StudentList = Loadable(lazy(() => import('../views/apps/siswa/SiswaList')));
const StudentEdit = Loadable(lazy(() => import('../views/apps/siswa/SiswaEdit')))
const KonselorList = Loadable(lazy(() => import ('../views/apps/konselor/Konselor')));
const KonselorEdit = Loadable(lazy(() => import ('../views/apps/konselor/KonselorEdit')));
const PelanggaranList = Loadable(lazy(() => import ('../views/apps/pelanggaran/PelanggaranList')));
const KelasList = Loadable(lazy(() => import ('../views/apps/kelas/KelasList')));
const KelasAdd = Loadable(lazy(() => import ('../views/apps/kelas/KelasAdd')));
const KelasEdit = Loadable(lazy(() => import ('../views/apps/kelas/KelasEdit')));



/* ****Dashboard Siswa***** */


// Pages
const AccountSetting = Loadable(lazy(() => import('../views/pages/account-setting/AccountSetting')),);

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const InternalError = Loadable(lazy(() => import('../views/authentication/500Error')));
const Forbiden = Loadable(lazy(() => import('../views/authentication/403Forbiden')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// landingpage
const LandingPage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));
const TentangKami = Loadable(lazy(() => import('../views/pages/landingpage/TentangKami')));
const Layanan = Loadable(lazy(() => import('../views/pages/landingpage/LayananKami')));
// const Konselor = Loadable(lazy(() => import('')));
const Literasi = Loadable(lazy(() => import('../views/pages/landingpage/Literasi')));
const LiterasiDetail = Loadable(lazy(() => import ('../views/pages/landingpage/LiterasiDetail')));

const Router = [
  {
    path: '/',
    element: <BlankLayout />, 
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/layanan', element: <Layanan /> },
      { path: '/tentang-kami', element: <TentangKami /> },
      { path: '/literasi', element: <Literasi /> },
      { path: '/literasi/:id', element: <LiterasiDetail /> },
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '/auth/500', element: <InternalError /> },
      { path: '/auth/403', element: <Forbiden /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/dashboard/admin', exact: true, element: <DashboardAdmin />, role: 'admin' },
      { path: '/dashboard/admin/siswa', element: <StudentList/>},
      { path: '/dashboard/admin/siswa/edit/:id', element: <StudentEdit/> },
      { path: '/dashboard/admin/konselor', element: <KonselorList/>},
      { path: '/dashboard/admin/konselor/edit/:id', element: <KonselorEdit/>},
      { path: '/dashboard/admin/pelanggaran', element: <PelanggaranList/>},
      { path: '/dashboard/admin/kelas', element: <KelasList/>, role: 'admin'}, 
      { path: '/dashboard/admin/kelas/tambah-kelas', element: <KelasAdd/>},
      { path: '/dashboard/admin/kelas/edit/:id', element: <KelasEdit/>},  
      { path: '/dashboard/admin/chats', element: <Chats /> },
      { path: '/dashboard/admin/notes', element: <Notes /> },
      { path: '/dashboard/admin/calendar', element: <Calendar /> },
      { path: '/dashboard/admin/tickets', element: <Tickets /> },
      { path: '/apps/gallery', element: <Gallery /> },
      { path: '/user-profile', element: <UserProfile /> },
      { path: '/pages/account-settings', element: <AccountSetting /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
    
  },
  {
    path: '/',
    element: <FullLayout />, 
    children: [
      { path: '/dashboard/siswa', exact: true, element: <DashboardSiswa /> }, 
    ],
  },
];

export default Router;
