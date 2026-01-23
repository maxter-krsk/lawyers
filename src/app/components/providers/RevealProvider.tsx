"use client";

import { useEffect } from "react";
import { initReveal } from "../../../lib/utils/reveal";

export function RevealProvider() {
  useEffect(() => {
    initReveal();
  }, []);

  return null;
}
