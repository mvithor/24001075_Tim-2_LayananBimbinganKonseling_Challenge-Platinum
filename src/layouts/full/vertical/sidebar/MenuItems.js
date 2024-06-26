import {
  IconPoint,
  IconAperture,
  IconUser,
  IconTrophy,
  IconUsers,
  IconBuilding,
  IconTargetArrow,
  IconNotebook,
  IconDashboard,
  IconSpeakerphone,
  IconHomeMove,
  IconMessage2,
  IconShield,
  IconHealthRecognition,
  IconMoodHappy,
  IconReceipt,

} from '@tabler/icons';


import { uniqueId } from 'lodash';

const Menuitems = [
   {
    navlabel: true,
    subheader: 'Dashboard Admin',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconDashboard,
    href: '/dashboard/admin',
    // chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Master Data',
    icon: IconAperture,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Data Siswa',
        icon: IconUser,
        href: '/dashboard/admin/siswa',
      },
      {
        id: uniqueId(),
        title: 'Data Kelas',
        icon: IconBuilding,
        href: '/dashboard/admin/kelas',
      },
      {
        id: uniqueId(),
        title: 'Data Prestasi',
        icon: IconTrophy,
        href: '/dashboard/admin/prestasi'
      },
      {
        id: uniqueId(),
        title: 'Data Pelanggaran',
        icon: IconTargetArrow,
        href: '/dashboard/admin/pelanggaran'

      },
      {
        id: uniqueId(),
        title: 'Data Konselor',
        icon: IconUsers,
        href: '/dashboard/admin/konselor',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Layanan',
    icon: IconAperture,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Konseling Individu',
        icon: IconHealthRecognition,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konseling Kelompok',
        icon: IconMoodHappy,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Mediasi',
        icon: IconShield,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konsultasi',
        icon: IconReceipt,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Catatan Anekdot',
        icon: IconNotebook,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konferensi Kasus',
        icon: IconSpeakerphone,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Home Visit',
        icon: IconHomeMove,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Referal',
        icon: IconMessage2,
        href: '#',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Rekap Layanan',
    icon: IconAperture,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Konseling Individu',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konseling Kelompok',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Mediasi',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konsultasi',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Catatan Anekdot',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Konferensi Kasus',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Home Visit',
        icon: IconPoint,
        href: '#',
      },
      {
        id: uniqueId(),
        title: 'Referal',
        icon: IconPoint,
        href: '#',
      },

    ],
  },
];

export default Menuitems;
