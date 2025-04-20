// components/url-form.tsx
"use client";
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {UrlFormValues, Url} from "../../../../typings";
import {DAYS_OF_WEEK} from "@/constants/constants";
import {urlFormSchema, DEFAULT_FORM_VALUES} from "./url.schema";

interface UrlFormProps {
  onSubmit: (values: UrlFormValues) => void;
  editingUrl: Url | null;
  onOpenChange: (open: boolean) => void;
}

export function UrlForm({
  onSubmit,
  editingUrl = null,
}: //   onOpenChange,
UrlFormProps): React.ReactElement {
  const form = useForm<UrlFormValues>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  // Update form when editing an existing URL
  useEffect(() => {
    if (editingUrl) {
      form.reset({
        url: editingUrl.url,
        interval: editingUrl.interval,
        daysOfWeek: editingUrl.daysOfWeek,
        timeRange: editingUrl.timeRange,
      });
    } else {
      form.reset(DEFAULT_FORM_VALUES);
    }
  }, [editingUrl, form]);

  const handleSubmit = (values: UrlFormValues): void => {
    onSubmit(values);
    form.reset();
  };

  return (
    <DialogContent className="sm:max-w-[500px] bg-background">
      <DialogHeader>
        <DialogTitle>{editingUrl ? "Edit URL" : "Add New URL"}</DialogTitle>
        <DialogDescription>
          Configure a URL to be pinged at regular intervals.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="url"
            render={({field}) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://your-app.example.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The URL that will be pinged to keep your service active.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interval"
            render={({field}) => (
              <FormItem>
                <FormLabel>Ping Interval (minutes)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={5}
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>
                  How often the URL should be pinged (minimum 5 minutes).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="daysOfWeek"
            render={({field}) => (
              <FormItem>
                <FormLabel>Days of Week</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-2">
                    {DAYS_OF_WEEK.map((day) => (
                      <Button
                        type="button"
                        key={day.value}
                        variant={
                          field.value.includes(day.value)
                            ? "default"
                            : "outline"
                        }
                        className={
                          field.value.includes(day.value) ? "bg-primary/80" : ""
                        }
                        onClick={() => {
                          const updatedDays = field.value.includes(day.value)
                            ? field.value.filter((d) => d !== day.value)
                            : [...field.value, day.value];
                          field.onChange(updatedDays);
                        }}
                      >
                        {day.label}
                      </Button>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Select the days when the URL should be pinged.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="timeRange.start"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeRange.end"
              render={({field}) => (
                <FormItem className=" ">
                  <FormLabel>End Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
            >
              {editingUrl ? "Update" : "Add"} URL
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
