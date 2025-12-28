"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNewsletterPage = pathname === "/app/Newsletter";

  return (
    <>
      {!isNewsletterPage && <Header />}
      <main>{children}</main>
      {!isNewsletterPage && <Footer />}
    </>
  );
}


