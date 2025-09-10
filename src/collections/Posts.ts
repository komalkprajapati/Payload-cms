import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  admin: {
    useAsTitle: "title",
  },


  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true, // title can be different per locale
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      localized: true, // slug also localized if you want different URLs
    },
    {
      name: "content", 
      type: 'richText', 
      required: true,
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      defaultValue: () => new Date(),
    },


    {
      name: "metaTitle",
      type: "text",
      label: "Meta Title",
      localized:true
    },
    {
      name: "metaDescription",
      type: "textarea",
      label: "Meta Description",
      maxLength: 200,
      localized:true
    },
  ],
};
