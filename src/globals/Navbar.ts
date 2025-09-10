import { GlobalConfig } from "payload";

export const Navbar: GlobalConfig = {
  access: {
    read: () => true,
  },
  slug: "navbar",
  label: { singular: "Navbar", plural: "Navbar" },
  fields: [
    // small logo
    {
      name: "smallLogo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "headline",
      label: "Headline",
      type: "text",
      localized:true
    },

    // Navbar Logo
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
        name: 'logoname',
        label: 'Logoname',
        type: 'text',
    },

    // 🔥 Dropdown (Parent + Items)
    {
      name: "dropDown",
      label: "Dropdown",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Parent Label",
          type: "text",
          localized: true,
        },
        {
            name: 'dIcon',
            type: 'upload',
            relationTo:'media'
        },
        {
          name: "url",
          label: "Parent URL",
          type: "text",
        },
        {
          name: "items",
          label: "Dropdown Items",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Item Label",
              type: "text",
              localized: true,
            },
            {
              name: "url",
              label: "Item URL",
              type: "text",
            },
            {
              name: "icon",
              label: "Item Icon",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },

    // Links (simple links without dropdown)
    {
      name: "links",
      label: "Links",
      type: "array",
      fields: [
        {
          name: "navLink",
          label: "NavLink",
          type: "text",
          localized: true,
        },
        {
          name: "url",
          label: "URL",
          type: "text",
        },
      ],
    },

    // Translator
    {
      name: "translation",
     type:'upload',
     relationTo:'media'
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
    },
    {
      name: "languages",
      type: "array",
      fields: [
        {
          name: "languageName", // e.g. Chinese
          type: "text",
        },
        {
          name: "language", // e.g. 简体中文
          type: "text",
        },
        {
          name: "code", // e.g. ch
          type: "text",
        },
      ],
    },

    // Sign Up Button
    {
      name: "signupButton",
      label: "Signup",
      type: "text",
      localized: true,
    },
    {
      name: "url",
      label: "Button URL",
      type: "text",
    },
  ],
};
