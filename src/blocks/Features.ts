import { Block } from "payload";

export const Features: Block = {
  slug: "features",
  labels: {
    singular: "Feature Section",
    plural: "Feature Sections",
  },
  fields: [
    {
      name: "features",
      label: "Features",
      type: "array",
      required: true,
      fields: [
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "heading",
          label: "Heading",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "textarea",
          localized: true,
          required: true,
        },
        {
          name: "buttonText",
          label: "Button Text",
          type: "text",
          localized: true,
        },
        {
          name: "url",
          label: "Button URL",
          type: "text",
        },
        {
          name: "sideImage",
          label: "Side Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "bgImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
        