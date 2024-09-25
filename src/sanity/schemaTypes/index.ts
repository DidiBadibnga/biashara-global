import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./project";
import { serviceType } from "./service";
import { memberType } from "./member";
import { heroType } from "./hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, serviceType, memberType, heroType],
};
