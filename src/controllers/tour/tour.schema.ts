import z from "zod";

export const TourSchema = z.object({
  title: z
    .string({
      required_error: "Title is required!",
      invalid_type_error: "Title must be a string!",
    })
    .min(3, "Task is minimum 3 characters!"),
  isComplete: z.boolean({
    required_error: "isComplete is required!",
    invalid_type_error: "isComplete must bo boolean!",
  }),
});

export type TourSchemaType = z.infer<typeof TourSchema>;
