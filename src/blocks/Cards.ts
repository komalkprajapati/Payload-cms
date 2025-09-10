import { Block } from "payload";

export const Cards: Block = {
    slug: 'cards',
    labels: { singular: 'Card', plural: 'Cards' },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            localized: true
        },
        {
            name: 'cards',
            label: 'Cards',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    label: 'Icon',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    localized: true
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                    localized: true
                },
                {
                    name: 'bgImg',
                    label: 'Background Image',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: "bgPosition",
                    label: "Background Position",
                    type: "text",
                    admin: {
                        placeholder: "e.g. 100px -150px",
                    },
                },
            ]

        },
        {
            name: 'text',
            label: 'Text',
            type: 'text',
            localized: true

        },
        {
            name: 'button',
            label: 'Button',
            type: 'array',
            localized: true,
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    localized: true

                },
                {
                    name: 'url',
                    type: 'text'
                },
                {
                    name: "variant",
                    label: "Button Style",
                    type: "select",
                    options: [
                        { label: "Primary (outline)", value: "primary" },
                        { label: "Secondary (blue)", value: "secondary" },
                    ],
                    defaultValue: "primary",
                },
            ]
        }
    ]
}