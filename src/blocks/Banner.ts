import { Block } from "payload";

export const Banner: Block = {
    slug: 'banner',
    labels: { singular: 'Banner', plural: 'Banners' },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            localized: true
        },
        {
            name: 'subHeading',
            label: 'Subheading',
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
        },
        // images
        {
            name: 'coin1',
            label:'Coin1',
            type:'upload',
            relationTo:'media'
        },
        {
            name: 'coin2',
            label:'Coin2',
            type:'upload',
            relationTo:'media'
        },
        {
            name: 'coin3',
            label: 'Coin3',
            type:'upload',
            relationTo:'media'
        },
    ]
}