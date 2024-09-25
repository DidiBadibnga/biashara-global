// import { Rule } from "postcss";
import { defineType } from "sanity";

export const heroType = defineType({
    name:"hero",
    type:"image",
    fields:[{
        name:"alt",
        title:"alt",
        type:"string"
    }]
})