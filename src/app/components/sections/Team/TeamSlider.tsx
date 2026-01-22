"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ImageWithSkeleton from "@/lib/ui/ImageWithSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { teamMembers } from "./team.data";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel";

export function TeamSlider() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedMember = teamMembers[selectedIndex] ?? teamMembers[0];

  const onSelect = React.useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = React.useCallback((index: number) => api?.scrollTo(index), [api]);
  const total = teamMembers.length;

  const prevIdx = React.useMemo(() => {
    if (total <= 1) return null;
    return (selectedIndex - 1 + total) % total;
  }, [selectedIndex, total]);

  const nextIdx = React.useMemo(() => {
    if (total <= 1) return null;
    return (selectedIndex + 1) % total;
  }, [selectedIndex, total]);

  const dots = React.useMemo(() => {
    if (!api) return [];
    return api.scrollSnapList();
  }, [api]);

  return (
    <div className="grid grid-cols-1 gap-34 md:grid-cols-2 md:gap-20 lg:grid-cols-[1.15fr_.85fr]">
      <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="overflow-hidden">
        <div className="flex justify-center gap-6 pb-14 sm:hidden">
          {dots.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Перейти к слайду ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-6 w-6 rounded-full transition-colors duration-300",
                index === selectedIndex ? "bg-green" : "bg-[#7FAFA4]"
              )}
            />
          ))}
        </div>
        <CarouselContent className="-ml-16 flex">
          {teamMembers.map((member, idx) => (
            <CarouselItem
              key={member.id}
              className="min-w-0 flex-[0_0_100%] pl-16"
              aria-roledescription="slide"
              aria-label={`${idx + 1} из ${teamMembers.length}`}
            >
              <div className="space-y-10 lg:space-y-20">
                <div className="rounded-6 sm:rounded-12 relative aspect-[8/9] overflow-hidden">
                  <ImageWithSkeleton
                    src={member.photo}
                    alt={member.name}
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>

                <div className="bg-main grid grid-cols-[1fr_auto] text-white">
                  <div className="space-y-8 p-16 text-center sm:text-left lg:space-y-14 lg:p-20">
                    <div className="text-18 lg:text-20">{member.name}</div>
                    {member.shortRole && (
                      <div className="text-16 font-light">{member.shortRole}</div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    aria-label="Следующий"
                    className="bg-orange hover:bg-green hidden h-auto w-44 cursor-pointer items-center justify-center transition-colors duration-300 sm:flex"
                  >
                    <Image
                      className="h-26 w-26"
                      src="/icons/ui/slider-arrow.svg"
                      alt="Следующий слайд"
                      width="26"
                      height="26"
                    />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden justify-center gap-6 pt-14 sm:flex xl:hidden">
          {dots.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Перейти к слайду ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-6 w-6 rounded-full transition-colors duration-300",
                index === selectedIndex ? "bg-green" : "bg-[#7FAFA4]"
              )}
            />
          ))}
        </div>
      </Carousel>

      <div className="desk:max-h-auto flex h-full min-h-full flex-col gap-16 md:max-h-[26rem]">
        <div className="[&::-webkit-scrollbar-thumb]:rounded-12 [&::-webkit-scrollbar-thumb]:bg-green hover:[&::-webkit-scrollbar-thumb]:bg-main/45 min-h-0 flex-1 overflow-x-hidden overflow-y-auto lg:[scrollbar-gutter:stable] [&::-webkit-scrollbar]:w-10 [&::-webkit-scrollbar-track]:bg-transparent">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="space-y-16 lg:pr-8"
            >
              {selectedMember?.experience && (
                <div className="space-y-14">
                  <div className="font-light uppercase">{selectedMember.experience}</div>
                </div>
              )}

              {selectedMember?.role && (
                <div className="space-y-14">
                  <div className="text-16 lg:text-18 font-extralight">{selectedMember.role}</div>
                </div>
              )}

              {!!selectedMember?.education?.length && (
                <div className="space-y-14">
                  <div className="text-16 lg:text-18 font-light uppercase">Обучение</div>
                  <ul className="custom-list space-y-8">
                    {selectedMember.education.map((item, idx) => (
                      <li
                        key={`${selectedMember.id}-edu-${idx}`}
                        className="text-14 lg:text-16 flex font-extralight"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember?.descr && (
                <div className="space-y-14">
                  <p className="text-16 lg:text-18 font-light">{selectedMember.descr}</p>
                </div>
              )}

              {!!selectedMember?.awards?.length && (
                <div className="space-y-14">
                  <div className="font-light uppercase">Награды</div>
                  <ul className="custom-list space-y-8 font-extralight">
                    {selectedMember.awards.map((item, idx) => (
                      <li
                        key={`${selectedMember.id}-award-${idx}`}
                        className="text-14 lg:text-16 flex gap-8"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-[1fr_auto] items-end gap-10">
                <div className="space-y-10 font-extralight lg:space-y-8">
                  {selectedMember?.email && (
                    <Link
                      className="hover-link flex items-center gap-10"
                      href={`mailto:${selectedMember.email}`}
                    >
                      <Image
                        className="h-24 w-24"
                        src="/icons/ui/email-dark.svg"
                        alt="Email"
                        width="24"
                        height="24"
                      />
                      {selectedMember.email}
                    </Link>
                  )}

                  {selectedMember?.phone && (
                    <Link
                      className="hover-link flex items-center gap-10"
                      href={`tel:${selectedMember.phone.replace(/\s/g, "")}`}
                    >
                      <Image
                        className="h-24 w-24"
                        src="/icons/ui/phone-dark.svg"
                        alt=""
                        width="24"
                        height="24"
                      />
                      {selectedMember.phone}
                    </Link>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  aria-label="Следующий"
                  className="xs:w-44 sm:hidden bg-orange hover:bg-orange flex h-58 w-30 items-center justify-center transition"
                >
                  <Image
                    className="xs:w-26 x:h-26 h-20 w-20"
                    src="/icons/ui/slider-arrow.svg"
                    alt="Следующий слайд"
                    width="26"
                    height="26"
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {total > 1 && (
          <div className="mt-auto hidden xl:block">
            <div className="overflow-hidden">
              <div className="flex gap-12">
                {nextIdx !== null && (
                  <div
                    className={cn(
                      "relative h-[15rem] flex-[0_0_70%] sm:flex-[0_0_45%] lg:flex-[0_0_48%]",
                      "rounded-16 overflow-hidden"
                    )}
                  >
                    <AnimatePresence initial={false}>
                      <motion.button
                        key={teamMembers[nextIdx].id}
                        type="button"
                        onClick={() => scrollTo(nextIdx)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 [will-change:opacity]"
                      >
                        <ImageWithSkeleton
                          src={teamMembers[nextIdx].photo}
                          alt=""
                          sizes="(max-width: 1024px) 50vw, 240px"
                          className="cursor-pointer object-cover"
                          objectPosition={teamMembers[nextIdx].photoPosition ?? "50% 50%"}
                        />
                      </motion.button>
                    </AnimatePresence>
                  </div>
                )}

                {prevIdx !== null && (
                  <div
                    className={cn(
                      "relative h-[15rem] flex-[0_0_70%] sm:flex-[0_0_45%] lg:flex-[0_0_48%]",
                      "rounded-16 overflow-hidden"
                    )}
                  >
                    <AnimatePresence initial={false}>
                      <motion.button
                        key={teamMembers[prevIdx].id}
                        type="button"
                        onClick={() => scrollTo(prevIdx)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 [will-change:opacity]"
                      >
                        <Image
                          src={teamMembers[prevIdx].photo}
                          alt=""
                          fill
                          className="cursor-pointer object-cover"
                          style={{
                            objectPosition: teamMembers[prevIdx].photoPosition ?? "50% 50%",
                          }}
                          sizes="(max-width: 1024px) 50vw, 240px"
                        />
                      </motion.button>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
