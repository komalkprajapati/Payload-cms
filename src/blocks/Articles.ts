import { Block } from "payload";

export const Articles : Block = {
    slug: 'article',
    labels:{singular: 'Article' , plural: 'Articles'},
    fields:[
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            localized: true
        },
        {
            name : 'button',
            label: 'Button Text',
            type: 'text',
            localized: true
        },
        {
            name: 'articles',
            label : 'Articles and News',
            type: 'array',
            fields:[
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media'
                },
                {
                    name: 'text',
                    label: 'Label',
                    type : 'text',
                    localized:true
                },
                {
                    name: 'date',
                    label: 'Date',
                    type: 'text',
                    localized: true
                },
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                    localized: true
                }
            ]
        }
    ]
}