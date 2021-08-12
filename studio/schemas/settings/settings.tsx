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
      name: "rewrites",
      type: "array",
      description: "Next.js rewrites configuration",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "source",
              type: "string",
            },
            {
              name: "destination",
              type: "string",
            },
          ],
          preview: {
            select: {
              source: "source",
              destination: "destination",
            },
            prepare({
              source,
              destination,
            }: {
              source?: string;
              destination?: string;
            }) {
              if (!source) {
                return {
                  title: "Please provide a source",
                };
              }

              if (!destination) {
                return {
                  title: "Please provide a destination",
                };
              }

              return {
                title: `"${source}" -> "${destination}"`,
              };
            },
          },
        },
      ],
    },

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
