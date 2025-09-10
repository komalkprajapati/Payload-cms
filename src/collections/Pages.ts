import { Articles } from "@/blocks/Articles";
import { Banner } from "@/blocks/Banner";
import { Cards } from "@/blocks/Cards";
import { ContentCards } from "@/blocks/ContentCards";
import { ContentImage } from "@/blocks/ContentImage";
import { Features } from "@/blocks/Features";
import { Hero } from "@/blocks/Hero";
import { CollectionConfig } from "payload";
export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,

        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Hero, ContentImage ,Features,Cards , ContentCards ,Banner ,Articles
            ],
        }

    ],
    access: {
        read: () => true,
      },
    };


