"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initReveal } from "../../../lib/utils/reveal";

export function RevealProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Важно: запуск после монтирования на клиенте
    const cleanup = initReveal();
    return cleanup;
  }, [pathname]);

  return <>{children}</>;
}
