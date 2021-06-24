export default {
  type: "document",
  name: "settings",
  title: "Settings",

  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],

  fields: [
    {
      name: "landingPage",
      type: "landingPageSettings",
      title: "Landing Page Settings",
    },

    {
      name: "band",
      type: "bandSettings",
      title: "Band Settings",
    },

    {
      name: "website",
      type: "websiteSettings",
      title: "Website Settings",
    },

    {
      name: "contentManagementDashboardLink",
      title: "Content Management Dashboard Link",
      type: "url",
      required: true,
    },
  ],
};
