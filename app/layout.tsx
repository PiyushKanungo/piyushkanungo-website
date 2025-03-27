import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "piyushkanungo.com",
  description: "My Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
