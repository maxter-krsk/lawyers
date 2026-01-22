"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/lib/ui/separator";
import { Accordion, AccordionItem } from "@/lib/ui/accordion";
import ImageWithSkeleton from "@/lib/ui/ImageWithSkeleton";
import type { PracticeItem } from "./practices.data";

export function PracticesAccordion({ items }: { items: PracticeItem[] }) {
  const [openValue, setOpenValue] = useState("");

  return (
    <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue}>
      {items.map((item, index) => {
        const isOpen = openValue === item.number;

        return (
          <AccordionItem key={item.number} value={item.number} className="border-0">
            <button
              type="button"
              onClick={() => setOpenValue(isOpen ? "" : item.number)}
              className="w-full cursor-pointer text-left"
            >
              <div className="relative w-full py-10 sm:py-14">
                <div className="xs:grid xs:grid-cols-[11rem_1fr_auto] flex w-full flex-col-reverse items-start gap-10 md:grid-cols-[11rem_16.25rem_auto] lg:grid-cols-[11rem_16.25rem_1fr_auto]">
                  <div className="flex h-full flex-col justify-between md:mr-10 lg:mr-0">
                    <h2 className="text-14 lg:text-16 pb-20 uppercase">{item.title}</h2>

                    <span className="text-14 border-green w-fit border-b border-l pb-4 pl-6 font-extralight tracking-[0.188rem]">
                      <span className="relative inline-block overflow-hidden leading-none">
                        <AnimatePresence initial={false} mode="wait">
                          {isOpen ? (
                            <motion.span
                              key="hide"
                              className="block"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                              скрыть
                            </motion.span>
                          ) : (
                            <motion.span
                              key="more"
                              className="block"
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                              подробнее
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </span>
                  </div>

                  <div className="flex shrink-0 lg:ml-auto lg:justify-center">
                    <div
                      className={`rounded-6 sm:rounded-12 relative aspect-square w-[7.063rem] overflow-hidden transition-[width] duration-500 ${
                        isOpen
                          ? "sm:w-[11.875rem] md:w-[16.25rem] lg:w-[16.25rem]"
                          : "sm:w-[9.063rem] md:w-[9.063rem] lg:w-[7.813rem]"
                      }`}
                    >
                      <ImageWithSkeleton
                        src={item.image}
                        alt={item.alt}
                        className={`object-cover transition-transform duration-500 ease-out ${
                          isOpen ? "scale-[1.06] sm:scale-100" : "scale-100"
                        }`}
                        sizes="(max-width: 640px) 113px, (max-width: 768px) 145px, 260px"
                      />
                    </div>
                  </div>

                  <span className="text-12 lg:text-16 text-grayLight justify-self-end pt-2 font-extralight lg:col-start-4">
                    {item.number}
                  </span>

                  <motion.div
                    className="hidden pr-40 lg:col-start-3 lg:row-start-1 lg:block lg:pl-60"
                    initial={false}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      y: isOpen ? 0 : 8,
                      maxHeight: isOpen ? 1000 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: isOpen ? 0.08 : 0 }}
                    style={{ overflow: "hidden", pointerEvents: isOpen ? "auto" : "none" }}
                  >
                    {item.content}
                  </motion.div>
                </div>

                <motion.div
                  className="mt-10 sm:mt-14 lg:hidden"
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 8,
                    maxHeight: isOpen ? 1000 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: isOpen ? 0.08 : 0 }}
                  style={{ overflow: "hidden", pointerEvents: isOpen ? "auto" : "none" }}
                >
                  {item.content}
                </motion.div>
              </div>
            </button>

            {index !== items.length - 1 && <Separator className="bg-green w-full" />}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
