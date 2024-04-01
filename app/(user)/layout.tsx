import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import { inter, localCustomFont, suwannaphum } from "./font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISTAD Ecommerce Web",
  description: "ISTAD Ecommerce Web is a web application for selling products.",
  openGraph: {
    title: "ISTAD Ecommerce Web",
    description:
      "ISTAD Ecommerce Web is a web application for selling products.",
    images: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quora.com%2FWho-is-Xavier&psig=AOvVaw0nz_lLia-oHgLLV-UHaVR5&ust=1712026287929000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCT64WBoIUDFQAAAAAdAAAAABAE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} h-screen flex flex-col`}
      >
        <header>
          <NavbarComponent />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
