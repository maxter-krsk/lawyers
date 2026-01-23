"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel"; // проверь путь у себя (у shadcn обычно так)
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "ВАШ УСПЕХ –\nНАША ЦЕЛЬ",
  },
  {
    id: 2,
    title: "Ваши заботы – наша\nмотивация",
  },
  {
    id: 3,
    title: "Ваше доверие – наша\nответственность",
  },
];

export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        className="w-full"
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ loop: true }}
      >
        <CarouselContent className="items-stretch">
          {slides.map((s) => (
            <CarouselItem key={s.id} className="h-full">
              <div className="bg-green flex h-[4.813rem] w-full items-center justify-center p-26 md:h-[8.75rem] md:p-40 lg:p-28 xl:h-[9.125rem]">
                <p className="text-20 md:text-24 xl:text-36 text-center leading-tight font-medium text-white uppercase select-none">
                  {s.title.split("\n").map((line, i) => (
                    <span key={i} className="desk:whitespace-nowrap block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-20 flex w-full items-center justify-center gap-[0.25rem]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Перейти к слайду ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "bg-orange h-[0.063rem] min-w-0 flex-1 transition-colors duration-300",
              i === selectedIndex ? "opacity-100" : "bg-[#599A8D]"
            )}
          />
        ))}
      </div>
    </>
  );
}
