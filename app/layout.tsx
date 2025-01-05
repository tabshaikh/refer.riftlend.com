import "./globals.css";
import type { Metadata } from "next";
import ScriptLoader from "./components/ScriptLoader";

export const metadata: Metadata = {
  title: "RiftLend",
  description: "Your stress free lending and borrowing experience",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
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
        <ScriptLoader />
      </body>
    </html>
  );
}
