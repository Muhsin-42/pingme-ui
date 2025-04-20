// components/header.tsx
import Link from "next/link";
import {Github} from "lucide-react";

import React from "react";

export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 text-transparent bg-clip-text">
              PingMe
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="https://github.com/Muhsin-42/pingme-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="hidden md:inline-block">Star on GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
