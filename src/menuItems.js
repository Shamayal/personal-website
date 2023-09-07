// homepage will have my name, the typewriter effect, my skills, links, about me
// skills: on homepage
// projects
// resume
// Food Blog
// Book Reviews
// Photography/Video
// Contact Meg

export const menuItems = [
  {
    title: "About",
    url: "/",
  },
  {
    title: "Skills",
    url: "/skills",
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
    url: "/contact",
  },
];
