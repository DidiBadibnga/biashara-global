import { defineType, defineField,  } from "sanity";

export const projectType = defineType({
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    defineField({
      title: "Project Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Project Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Project Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Product Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
      },
    }),
    // defineField({
    //   title: "Product Price",
    //   name: "price",
    //   type: "number",
    //   validation: (Rule) => Rule.required()
    // }),
    // defineField({
    //   title: "Product Category",
    //   name: "category",
    //   type: "reference",
    //   to: [{ type: "category" }]
    // })
  ],
});
