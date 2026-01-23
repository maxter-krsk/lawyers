"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DevelopedBy() {
  return (
    <motion.div
      className="desk:mt-auto text-center mb-60 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Link
        className="group relative inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase"
        href="https://maxter.pro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <motion.svg
            className={"h-[1rem] w-[1rem]"}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={{
              rest: { rotate: 0, color: "#868686", opacity: 0.5 },
              hover: { rotate: 45, color: "#fff", opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          <span className="relative inline-block">
            <motion.span
              variants={{
                rest: {
                  color: "#868686",
                  letterSpacing: "0.2rem",
                  opacity: 0.5,
                },
                hover: {
                  color: "#fff",
                  letterSpacing: "0.3rem",
                  opacity: 1,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                opacity: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Разработано в Maxter
            </motion.span>

            <motion.span
              className="absolute bottom-0 left-0 h-px w-0 bg-white"
              variants={{
                rest: { width: "0%", opacity: 0 },
                hover: { width: "100%", opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </span>
        </motion.span>
      </Link>
    </motion.div>
  );
}
