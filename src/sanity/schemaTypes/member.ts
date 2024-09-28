/* eslint-disable @typescript-eslint/no-unused-vars */
import { Rule } from "postcss";
import { defineType, defineField } from "sanity";

export const memberType = defineType({
  title: "Team Member",
  name: "member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Member name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Image text",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
