// components/empty-state.tsx
import React from "react";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

interface EmptyStateProps {
  onAddClick: () => void;
}

export function EmptyState({onAddClick}: EmptyStateProps): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-dashed border-border rounded-lg bg-muted/10">
      <div className="h-20 w-20 rounded-full bg-muted/20 flex items-center justify-center mb-4">
        <Plus className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">No URLs added yet</h3>
      <p className="text-muted-foreground text-center max-w-md mb-4">
        Start by adding your first URL to be pinged at regular intervals to keep
        your services running.
      </p>
      <Button
        onClick={onAddClick}
        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
      >
        <Plus className="mr-2 h-4 w-4" /> Add your first URL
      </Button>
    </div>
  );
}
