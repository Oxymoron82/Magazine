"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatedBy from "@/components/CreatedBy";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="h-[100svh] w-full overflow-hidden">
        {children}
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <CreatedBy />
      <Footer />
    </>
  );
}