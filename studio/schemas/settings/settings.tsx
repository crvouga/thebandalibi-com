export default {
  type: "document",
  name: "settings",
  title: "Settings",

  __experimental_actions: [
    // "create",
    "update",
    //'delete',
    "publish",
  ],

  fields: [
    {
      name: "band",
      type: "bandSettings",
      title: "Band Settings",
    },

    {
      name: "landingPage",
      type: "landingPageSettings",
      title: "Landing Page Settings",
    },

    {
      name: "website",
      type: "websiteSettings",
      title: "Website Settings",
    },

    {
      name: "contentManagementDashboardUrl",
      title: "Content Management Dashboard URL",
      type: "url",
      required: true,
    },
  ],
};
