import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12 bg-gradient-to-br from-background via-background to-secondary/50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000000)] opacity-30" />

      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-20 animate-pulse" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-sm">
            Ping Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            Keep your web services running 24/7 with Ping Me. Prevent downtime
            on free-tier hosting platforms like Render, Railway, and more.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/80 shimmer" />
              <p className="text-sm text-muted-foreground">
                Prevent Idle Shutdowns
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/80 shimmer" />
              <p className="text-sm text-muted-foreground">
                Custom Ping Schedules
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/80 shimmer" />
              <p className="text-sm text-muted-foreground">Uptime Monitoring</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/80 shimmer" />
              <p className="text-sm text-muted-foreground">
                Multiple URL Support
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
