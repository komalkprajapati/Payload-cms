import { Block } from "payload"

export const ContentCards : Block={
    slug : 'contentCards',
    labels: {singular : 'ContentCard' , plural :"ContentCards"},
    fields:[
        // side content
         {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            localized: true
        },
        {
            name: 'subHeading',
            label: 'SubHeading',
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



        // side Cards

        {
            name : 'cards',
            label:'Cards',
            type:'array',
            fields:[
                {
                    name: 'steps',
                    label: 'Steps',
                    type: 'text',
                    localized: true
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

                }
            ]
        }
    ]
}