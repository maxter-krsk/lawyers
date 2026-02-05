"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initReveal } from "../../../lib/utils/reveal";

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initReveal();
    return cleanup;
  }, [pathname]);

  return null;
}
