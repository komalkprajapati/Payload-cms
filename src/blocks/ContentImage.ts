import { Block } from "payload";

export const ContentImage : Block = {
    slug: 'contentImage',
    labels:{singular : 'ContentImage' ,plural : 'ContentImages'},
    fields:[
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
            localized: true
        },
        {
            name : 'imageDashboard',
            label: 'Dashboard Image',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name : 'imagePhone',
            label: 'Phone Image',
            type: 'upload',
            relationTo: 'media'
        }
    ]
}