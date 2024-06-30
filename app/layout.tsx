import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "An agile kanban board with sub-tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
          <Navbar key={""} title={""} route={""} />
          {children}
          </NextUIProvider>
        </body>
      </html>
  );
}
