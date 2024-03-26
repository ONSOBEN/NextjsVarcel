import SideBarComponent from "@/components/sidebar/SideBarComponent";
import "@/app/globals.css";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <aside className="fixed h-screen">
          <SideBarComponent />
        </aside>
        <main>
          <div>
            <h1>This is admin dashboard</h1>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
