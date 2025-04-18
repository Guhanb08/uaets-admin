export default [
  {
    title: "Home",
    to: { name: "root" },
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "Roles & Permissions",
    icon: { icon: "tabler-lock" },
    children: [
      {
        title: "Permissions",
        to: "admin-permissions",
        action: "read",
        subject: "Permissions",
      },
    ],
  },

  {
    title: "Learner Management",
    icon: { icon: "tabler-users" },
    children: [
      {
        title: "Learners",
        to: "apps-learner",
      },
    ],
  },

  {
    title: "Course Management",
    icon: { icon: "tabler-book" },
    children: [
      {
        title: "Tags",
        to: "apps-course-tag",
      },
      {
        title: "Category",
        to: "apps-course-category",
      },
      {
        title: "Course",
        to: "apps-course",
      },
    ],
  },

  {
    title: "Exam Management",
    icon: { icon: "tabler-book" },
    children: [
      {
        title: "Exams",
        to: "apps-exam",
      },
    ],
  },

  /*   {
    title: "Organization Management",
    icon: { icon: "tabler-buildings" },
    children: [
      {
        title: "Languages",
        to: "apps-common-language",
      },

      {
        title: "Branch",
        to: "apps-common-branch",
      },
    ],
  },
 */
  {
    title: "Content Management",
    icon: { icon: "tabler-app-window" },
    children: [
      {
        title: "Contents",
        to: "apps-content-list",
      },
      {
        title: "Sections",
        to: { name: "apps-content-id", params: { id: "section" } },
      },
      {
        title: "Languages",
        to: "apps-common-language",
      },
      {
        title: "Branch",
        to: "apps-common-branch",
      },
      {
        title: "Gallery",
        to: "apps-content-gallery",
      },
      {
        title: "Blog",
        to: "apps-content-blog",
      },
      {
        title: "Faq",
        to: "apps-content-faq",
      },
      {
        title: "Testimonial",
        to: "apps-content-testimonial",
      },
      {
        title: "Inquiry",
        to: "apps-content-inquiry",
      },
      {
        title: "Requirement",
        to: "apps-content-requirement",
      },
    ],
  }
,  

  {
    title: "File Manager",
    icon: { icon: "tabler-file" },
    to: "admin-files-manager",
  },
];
