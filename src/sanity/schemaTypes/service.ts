import { defineType, defineField } from "sanity";

export const serviceType = defineType({
  title: "Service",
  name: "service",
  type: "document",
  fields: [
    defineField({
      title: "Service Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Service Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Service Icon",
      name: "icon",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Service Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
      },
    }),
  ],
});
