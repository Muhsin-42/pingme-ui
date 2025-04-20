// app/page.tsx
"use client";
import {Header} from "@/components/globals/header";
import {UrlManager} from "@/components/pages/url/url-manager";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className="flex p-5 flex-col  min-h-screen bg-background">
      <Header />

      <main className=" py-6 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" />

            <UrlManager />
          </div>
        </div>
      </main>
    </div>
  );
}
