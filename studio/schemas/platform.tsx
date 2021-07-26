import { PlatformIcon } from "../components";

export default {
  name: "platform",
  title: "Platform",
  type: "document",
  icon: PlatformIcon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      required: true,
    },

    {
      name: "appIcon",
      type: "image",
      title: "App Icon",
      required: true,
    },
  ],
};
