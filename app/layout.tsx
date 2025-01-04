import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embed Waitlist Form",
  description: "Waitlist form for refer.riftlend.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
        <script src="/js/waitlist.js" />
      </body>
    </html>
  );
}
