import {defineType, defineField} from "sanity"

export const team =  defineType({
    name:"Team",
    title:"Team",
    type:"document",
    fields: [
        defineField({
            name:"Name",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Position",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Image",
            type:"image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Priority",
            type:"number",
            validation: (rule) => rule.required()
        }),
    ]
})

/* 
    Query to fetch team data
    *[_type=="Team"] | order(Priority asc) {_id, Name, Position, Priority, "imageURL":Image.asset->url}

*/