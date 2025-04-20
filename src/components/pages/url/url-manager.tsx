// components/url-manager.tsx
"use client";
import React, {useState, useEffect} from "react";
import {Url, UrlFormValues} from "../../../../typings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import {Plus} from "lucide-react";
import {EmptyState} from "./empty-url";
import useUrlStore from "@/store/url.store";
import {UrlForm} from "./url.form";
import {UrlTable} from "./url.table";
import axiosWithToken from "@/lib/axios/with-token.axios";
import {APIS} from "@/lib/apis";
import {toast} from "sonner";

export function UrlManager(): React.ReactElement {
  const {urls, addUrl, setUrls, updateUrl, deleteUrl} = useUrlStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUrl, setEditingUrl] = useState<Url | null>(null);

  const handleSubmit = async (values: UrlFormValues): Promise<void> => {
    if (editingUrl) {
      const res = await axiosWithToken.patch(
        `${APIS.urls.update}/${editingUrl?._id}`,
        values
      );
      toast.success("URL updated successfully");
      updateUrl(editingUrl._id, res?.data?.url);
      setEditingUrl(null);
    } else {
      const res = await axiosWithToken.post(APIS.urls.add, values);
      toast.success("URL added successfully");
      addUrl(res?.data?.url);
    }
    setIsDialogOpen(false);
  };

  const handleEditClick = (url: Url): void => {
    setEditingUrl(url);
    setIsDialogOpen(true);
  };

  const toggleActiveInactive = (id: string, isActive: boolean): void => {
    axiosWithToken.patch(`${APIS.urls.update}/${id}`, {isActive});
    toast.success(
      isActive ? "URL activated successfully" : "URL deactivated successfully"
    );
    updateUrl(id, {isActive});
  };

  const handleAddClick = (): void => {
    setEditingUrl(null);
    setIsDialogOpen(true);
  };

  // fetch urls
  useEffect(() => {
    axiosWithToken.get(APIS.urls.get).then((res) => {
      console.log(res.data.urls);
      setUrls(res.data.urls);
    });
  }, [setUrls]);

  return (
    <Card className="border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">URL Management</CardTitle>
        <CardDescription>
          Add URLs to keep your services running smoothly with scheduled
          pinging.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-muted-foreground">
            {urls.length} URL{urls.length !== 1 ? "s" : ""} configured
          </span>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
                onClick={handleAddClick}
              >
                <Plus className="mr-2 h-4 w-4" /> Add URL
              </Button>
            </DialogTrigger>
            <UrlForm
              onSubmit={handleSubmit}
              editingUrl={editingUrl}
              onOpenChange={setIsDialogOpen}
            />
          </Dialog>
        </div>

        {urls.length > 0 ? (
          <UrlTable
            urls={urls}
            toggleActiveInactive={toggleActiveInactive}
            onEdit={handleEditClick}
            onDelete={deleteUrl}
          />
        ) : (
          <EmptyState onAddClick={handleAddClick} />
        )}
      </CardContent>
    </Card>
  );
}
