"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { teamMembers } from "./team.data";

export function TeamSlider() {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true, align: "start" });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedMember = teamMembers[selectedIndex] ?? teamMembers[0];

  const onSelect = React.useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi]);

  React.useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  const scrollTo = React.useCallback(
    (index: number) => emblaMainApi?.scrollTo(index),
    [emblaMainApi]
  );

  const thumbs = React.useMemo(() => {
    const total = teamMembers.length;
    if (total <= 1) return [];
    if (total === 2) return [(selectedIndex + 1) % total];
    return [(selectedIndex + 1) % total, (selectedIndex + 2) % total];
  }, [selectedIndex]);

  return (
    <div className="grid gap-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="-ml-16 flex">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="min-w-0 flex-[0_0_100%] pl-16"
              aria-roledescription="slide"
              aria-label={`${idx + 1} из ${teamMembers.length}`}
            >
              <div className="space-y-20">
                <div className="rounded-12 relative aspect-[8/9] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                <div className="bg-main space-y-14 p-20 text-white">
                  <div className="text-20">{member.name}</div>
                  {member.shortRole && <div className="font-light">{member.shortRole}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex h-full flex-col gap-16">
        <div className="min-h-0 flex-1 overflow-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="space-y-16"
            >
              {selectedMember?.experience && (
                <div className="space-y-14">
                  <div className="font-light uppercase">{selectedMember.experience}</div>
                </div>
              )}

              {selectedMember?.role && (
                <div className="space-y-14">
                  <div className="text-18 font-extralight">{selectedMember.role}</div>
                </div>
              )}

              {!!selectedMember?.education?.length && (
                <div className="space-y-14">
                  <div className="text-18 font-light uppercase">Обучение</div>
                  <ul className="custom-list space-y-10">
                    {selectedMember.education.map((item, idx) => (
                      <li key={`${selectedMember.id}-edu-${idx}`} className="flex font-extralight">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember?.descr && (
                <div className="space-y-14">
                  <p className="text-18 font-light">{selectedMember.descr}</p>
                </div>
              )}

              {!!selectedMember?.awards?.length && (
                <div className="space-y-14">
                  <div className="font-light uppercase">Награды</div>
                  <ul className="custom-list space-y-8 font-extralight">
                    {selectedMember.awards.map((item, idx) => (
                      <li key={`${selectedMember.id}-award-${idx}`} className="flex gap-8">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedMember?.email || selectedMember?.phone) && (
                <div className="space-y-14">
                  <div className="space-y-10 font-extralight">
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
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* THUMBS (simple fade) */}
        {thumbs.length > 0 && (
          <div className="mt-auto">
            <div className="overflow-hidden">
              <div className="flex gap-12">
                <AnimatePresence mode="wait" initial={false}>
                  {thumbs.map((idx) => {
                    const member = teamMembers[idx];
                    return (
                      <motion.button
                        key={member.id}
                        type="button"
                        onClick={() => scrollTo(idx)}
                        className={cn(
                          "relative flex-[0_0_70%] sm:flex-[0_0_45%] lg:flex-[0_0_48%]",
                          "rounded-16 overflow-hidden border transition"
                        )}
                        aria-label={`Открыть: ${member.name}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
                        exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                      >
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={member.photo}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 240px"
                          />
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
