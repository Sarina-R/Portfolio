import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TransitionProvider } from "@/components/layout/page-transition";

export const metadata: Metadata = {
  title: "Sarina Rezanezhad — Frontend Developer",
  description:
    "Frontend developer working in React, Next.js and TypeScript — component systems, complex workflows, and Persian-first RTL products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <TransitionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
