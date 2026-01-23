"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONSENT_COOKIE = "cookie-consent=true";
const COOKIE_MAX_AGE_DAYS = 6;

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes("cookie-consent=");
    if (!hasConsent) setVisible(true);
  }, []);

  const accept = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_MAX_AGE_DAYS);

    document.cookie = `${CONSENT_COOKIE}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="cookie-banner"
          // появление снизу + лёгкая прозрачность
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // закрытие вниз
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="fixed right-0 bottom-0 left-0 z-50 p-0 md:right-auto md:bottom-6 md:left-1/2 md:mx-auto md:w-[calc(100%-2rem)] md:max-w-[60rem] md:-translate-x-1/2 md:p-2"
        >
          <div className="bg-green rounded-t-10 md:rounded-12 p-18 text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:p-26 lg:p-30">
            <div className="flex flex-col items-center justify-between gap-20 text-center md:flex-row md:gap-0 md:text-left">
              <p className="text-14 md:text-16 lg:text-18 max-w-[80%] font-light">
                Продолжая просмотр сайта, вы соглашаетесь с использованием cookie в соответствии с
                нашей{" "}
                <Link href="/cookie-policy" className="hover-link font-medium">
                  Политикой в отношении обработки cookie-файлов
                </Link>
              </p>

              <div className="flex justify-center">
                <button
                  onClick={accept}
                  className="bg-orange text-16 lg:text-18 hover:text-orange cursor-pointer px-40 py-16 uppercase transition-colors duration-300 hover:bg-white"
                >
                  ок
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
