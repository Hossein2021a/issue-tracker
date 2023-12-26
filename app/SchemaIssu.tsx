import { z } from "zod";

export const SchemaIssu = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1, "description is required"),
});

export const NewSchemaIssu = z.object({
  title: z.string().min(1, "title is required").max(255).optional(),
  description: z.string().min(1, "description is required").optional(),
  assignedToUserId: z
    .string()
    .min(1, "assignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});
