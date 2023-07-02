export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Me',
    url: '',
    submenu: [
      {
        title: 'SubHeading',
        submenu: [
          {
            title: 'Content 1',
            url: '/money/income/add',
          },
          {
            title: 'Content 2',
            url: 'money/income/view',
          }
        ]
      },
      {
        title: 'SubHeading 2',
      }
    ]
  },
  {
    title: 'My Skills',
    url: '',
  },
  {
    title: 'My Projects',
    url: '',
  },
  {
    title: 'Other',
    url: '',
    submenu: [
      {
        title: 'Ma Ze Dar Creations',
        url: '/learn/money'
      },
      {
        title: 'Book Reviews',
        url: '/learn/finance'
      }
    ]
  },
  {
    title: 'Contact Me',
    url: '',
  }
];

