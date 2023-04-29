import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiVuejs,
  mdiCashMultiple,
  mdiAccountMultiple,
  mdiDomain,
  mdiCommentProcessing,
  mdiViewDashboard,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiViewDashboard,
    label: 'Dashboard',
  },
  {
    label: 'Buisness',
    icon: mdiDomain,
    menu: [
      {
        label: 'All Listing',
        href: '/listing',
      },
      {
        label: 'Add Listing',
        href: '/listing/add',
      },
      {
        label: 'Categories',
        href: '/listing/categories',
      },
      {
        label: 'Featured Listing',
        href: '/listing/featured',
      },
    ],
  },
  {
    label: 'Packages',
    icon: mdiCashMultiple,
    menu: [
      {
        label: 'All Packages',
        href: '/packages',
      },
      {
        label: 'Add Package',
        href: '/packages/add',
      },
    ],
  },
  {
    label: 'Reviews',
    href: '/reviews',
    icon: mdiCommentProcessing,
  },
  {
    label: 'Users',
    href: '/users',
    icon: mdiAccountMultiple,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  // {
  //   href: '/tables',
  //   label: 'Tables',
  //   icon: mdiTable,
  // },
  // {
  //   href: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide,
  // },
  // {
  //   href: '/responsive',
  //   label: 'Responsive',
  //   icon: mdiResponsive,
  // },
  // {
  //   href: '/',
  //   label: 'Styles',
  //   icon: mdiPalette,
  // },
  // {
  //   href: '/profile',
  //   label: 'Profile',
  //   icon: mdiAccountCircle,
  // },
  // {
  //   href: '/login',
  //   label: 'Login',
  //   icon: mdiLock,
  // },
  // {
  //   href: '/error',
  //   label: 'Error',
  //   icon: mdiAlertCircle,
  // },
]

export default menuAside
