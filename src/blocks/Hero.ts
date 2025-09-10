import { Block } from "payload";

export const Hero: Block = {
    slug: "hero",
    labels: { singular: 'hero', plural: 'heros' },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            localized:true
        },
        {
            name: 'content',
            label: 'Content',
            type: 'textarea',
            localized:true
        },
        {
            name: 'button',
            label: 'Button',
            type: 'array',
            localized:true,
            fields: [
                {
                    name: 'name',
                    type: 'text'
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