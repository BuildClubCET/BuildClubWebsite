import {defineType, defineField} from "sanity"

export const gallery = defineType({
    name:"Gallery",
    title:"Gallery",
    type:"document",
    fields:[
        defineField({
            name:"Title",
            type:"string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name:"Image",
            type:"image",
            validation: (rule) => rule.required()
        }),
    ]
})

/* 
    Query to get the image title and url
    *[_type=="Gallery"]{_id, Title, "imageURL":Image.asset->url}
*/