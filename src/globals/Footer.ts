import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: "footer",
    label: "Footer",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "logo",
            label: "Logo",
            type: "upload",
            relationTo: "media",
        },
        {
            name:'logoname',
            label:'Logo name',
            type:'text'
        },
        {
            name: "copyright",
            label: "Copyright",
            type: "text",
            localized: true,
        },
        {
            name: 'bgImg',
            type: 'array',
            fields: [
                { 
                    name: 'backgroundImg',
                    label: 'Background Image',
                    type: 'upload',
                    relationTo: 'media'
                }

            ]
           
        },
        {
            name: "sections",
            label: "Footer Sections",
            type: "array",
            labels: {
                singular: "Section",
                plural: "Sections",
            },
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "text",
                    localized: true,
                },
                {
                    name: "links",
                    label: "Links",
                    type: "array",
                    fields: [
                        {
                            name: "label",
                            type: "text",
                            localized: true,
                        },
                        {
                            name: "url",
                            type: "text",
                        },
                    ],
                },
            ],
        },
        {
            name: "newsletter",
            label: "Newsletter",
            type: "group",
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "text",
                    localized: true,
                },
                {
                    name: "description",
                    label: "Description",
                    type: "textarea",
                    localized: true,
                },
                {
                    name: "placeholder",
                    label: "Input Placeholder",
                    type: "text",
                    localized: true,
                },
            ],
        },
        {
            name: "socialLinks",
            label: "Social Links",
            type: "array",
            fields: [
                {
                    name: "platform",
                    label: "Platform",
                    type: "select",
                    options: [
                        { label: "Facebook", value: "facebook" },
                        { label: "Twitter/X", value: "twitter" },
                        { label: "Instagram", value: "instagram" },
                        { label: "LinkedIn", value: "linkedin" },
                        { label: "YouTube", value: "youtube" },
                    ],
                },
                {
                    name: "url",
                    type: "text",
                },
                {
                    name: "icon",
                    label: "Icon",
                    type: "upload",
                    relationTo: "media",
                },
            ],
        },



        {
            name: "translation",
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: "languageSelector",
            label: "Language Selector",
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text",
                },
                {
                    name: "code",
                    type: "text",
                },
            ],
        },
        {
            name: "legalLinks",
            label: "Legal Links",
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text",
                    localized: true,
                },
                {
                    name: "url",
                    type: "text",
                },
            ],
        },
    ],
};
