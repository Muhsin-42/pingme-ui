// components/pages/url/url.table.tsx
"use client";
import React from "react";
import {formatDays} from "@/constants/constants";
import {Button} from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {Edit, Trash2, Clock, CalendarDays} from "lucide-react";
import {Url} from "../../../../typings";
import {Switch} from "@/components/ui/switch";

interface UrlTableProps {
  urls: Url[];
  onEdit: (url: Url) => void;
  onDelete: (id: string) => void;
  toggleActiveInactive: (id: string, isActive: boolean) => void;
}

export function UrlTable({
  urls,
  onEdit,
  onDelete,
  toggleActiveInactive,
}: UrlTableProps): React.ReactElement {
  return (
    <div className="rounded-md border border-border/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30 hover:bg-muted/30">
            <TableHead>URL</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls.map((url) => (
            <TableRow
              key={url._id}
              className="border-border/50 hover:bg-muted/20 transition-colors"
            >
              <TableCell className="font-medium">
                <div className="truncate max-w-[240px]">
                  <HoverCard>
                    <HoverCardTrigger className="cursor-default">
                      <span className="text-primary hover:underline">
                        {url.url}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">URL Details</h4>
                          <p className="text-sm break-all">{url.url}</p>
                          <div className="flex items-center pt-2">
                            <Clock className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                              Added on {String(url?.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </TableCell>
              <TableCell className="min-w-[120px]">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 opacity-70" />
                    <span>Every {url.interval} minutes</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm text-muted-foreground">
                      {formatDays(url.daysOfWeek)}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {url.timeRange.start} - {url.timeRange.end}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    url.isActive
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {url.isActive ? "Active" : "Inactive"}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="url-active"
                      checked={url.isActive}
                      onCheckedChange={(e) => {
                        toggleActiveInactive(url._id, e);
                      }}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(url)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    onClick={() => onDelete(url._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
