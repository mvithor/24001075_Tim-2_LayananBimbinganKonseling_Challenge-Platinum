import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';
// import { element } from 'prop-types';
// import { element } from 'prop-types';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const ModernDash = Loadable(lazy(() => import('../views/dashboard/Admin')));

/* ****Dashboard Admin***** */
const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const Student = Loadable(lazy(() => import('../views/apps/siswa/Siswa')));
const StudentEdit = Loadable(lazy(() => import('../views/apps/siswa/SiswaEdit')))
const KonselorList = Loadable(lazy(() => import ('../views/apps/konselor/Konselor')));
const KonselorEdit = Loadable(lazy(() => import ('../views/apps/konselor/KonselorEdit')));
const PelanggaranList = Loadable(lazy(() => import ('../views/apps/pelanggaran/PelanggaranList')))


// Pages
const AccountSetting = Loadable(lazy(() => import('../views/pages/account-setting/AccountSetting')),);

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// landingpage
const LandingPage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));
// const TentangKami = Loadable(lazy(() => import('')));
// const Layanan = Loadable(lazy(() => import('')));
// const Konselor = Loadable(lazy(() => import('')));
// const Literasi = Loadable(lazy(() => import('')));

const Router = [
  {
    path: '/',
    element: <BlankLayout />, 
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/auth/404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/two-steps', element: <TwoSteps /> },
      { path: '/auth/maintenance', element: <Maintenance /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/dashboard', exact: true, element: <ModernDash /> },
      { path: '/dashboard/admin/siswa', element: <Student/>},
      { path: '/dashboard/admin/siswa/edit/:id', element: <StudentEdit/> },
      { path: '/dashboard/admin/konselor', element: <KonselorList/>},
      { path: '/dashboard/admin/konselor/edit/:id', element: <KonselorEdit/>},
      { path: '/dashboard/admin/pelanggaran', element: <PelanggaranList/>},
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
];

export default Router;
