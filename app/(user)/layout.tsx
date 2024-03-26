import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import { inter, localCustomFont, suwannaphum } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} h-screen flex flex-col`}>
        <header>
          <NavbarComponent />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
