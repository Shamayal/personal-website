export const menuItems = [
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Skills",
    url: "/#skills",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Hobbies",
    url: "",
    submenu: [
      {
        title: "Photography",
        submenu: [
          {
            title: "Ma Ze Dar Creations",
            url: "/hobbies/photography/food",
          },
          {
            title: "Travel",
            url: "/hobbies/photography/travel",
          },
        ],
      },
      {
        title: "Book Reviews",
        url: "/hobbies/books",
      },
    ],
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];
