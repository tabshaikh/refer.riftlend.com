"use client";

import { usePathname } from "next/navigation";

export default function ScriptLoader() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && <script src="/js/waitlist.js" />}
      {pathname === "/confirm" && <script src="/js/confirm.js" />}
    </>
  );
}
