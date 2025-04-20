// schema.ts
import * as z from "zod";
import {UrlFormValues} from "../../../../typings";

export const urlFormSchema = z.object({
  url: z.string().url({message: "Please enter a valid URL"}),
  interval: z.number().min(5, {message: "Interval must be at least 5 minutes"}),
  daysOfWeek: z
    .array(z.number().min(0).max(6))
    .min(1, {message: "Select at least one day"}),
  timeRange: z.object({
    start: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {message: "Use HH:MM format"}),
    end: z
      .string()
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {message: "Use HH:MM format"}),
  }),
});

export const DEFAULT_FORM_VALUES: UrlFormValues = {
  url: "",
  interval: 5,
  daysOfWeek: [1, 2, 3, 4, 5],
  timeRange: {
    start: "09:30",
    end: "18:30",
  },
};
