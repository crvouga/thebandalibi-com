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
      name: "redirects",
      type: "array",
      description: "Next.js redirects configuration",
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
              return {
                title: `"${source}" -> "${destination}"`,
              };
            },
          },
        },
      ],
    },

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
