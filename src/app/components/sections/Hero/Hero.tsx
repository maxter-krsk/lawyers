import Image from "next/image";
import { HeroSlider } from "./HeroSlider";
import { Separator } from "@/lib/ui/separator";
import { Square } from "@/lib/ui/square";
import ImageWithSkeleton from "@/lib/ui/ImageWithSkeleton";

const features = [
  {
    src: "/icons/ui/complex.svg",
    alt: "Комплексный подход",
    name: "Комплексный подход",
  },
  {
    src: "/icons/ui/escort.svg",
    alt: "Юридическое сопровождение",
    name: "Формат постоянного юридического сопровождения",
  },
  {
    src: "/icons/ui/regions.svg",
    alt: "работает с клиентами из разных регионов",
    name: "Работаем с клиентами из разных регионов, сопровождаем проекты по всей России",
  },
];

export function Hero() {
  return (
    <section className="mb-110">
      <div className="container">
        <div className="mb-34 flex flex-col pt-34 sm:mb-24 sm:pt-20 lg:mb-50 lg:flex-row">
          <h1 className="text-28 md:text-48 lg:text-62 mb-20 leading-none font-medium uppercase sm:mb-10 lg:mb-0">
            Ваша надёжная
            <br />
            юридическая <span className="text-green">защита</span>
          </h1>

          <p className="text-14 sm:text-18 text-right font-light uppercase md:text-left">
            Команда <span className="text-green font-light">профессионалов</span>
            <br />
            для бизнеса и частных лиц
          </p>
        </div>
        <div className="relative">
          <Separator className="bg-green hidden w-full md:block" />
          <Square className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
          <div className="flex flex-col items-stretch md:flex-row">
            <ul className="flex basis-1/2 flex-col gap-8 pb-34 md:pt-40 md:pb-0">
              {features.map((feature, index) => (
                <li className="flex items-center gap-10 pr-32" key={index}>
                  <Image
                    width={24}
                    height={24}
                    src={feature.src}
                    alt={feature.alt}
                    className="h-24 w-24"
                  />
                  <p className="font-extralight">{feature.name}</p>
                </li>
              ))}
            </ul>

            <Separator
              orientation="vertical"
              className="bg-green hidden min-h-[12.875rem] md:block"
            />

            <div className="min-w-0 flex-1 basis-1/4 p-0 md:px-24 md:pt-24 lg:px-32 lg:pt-40">
              <HeroSlider />
            </div>
          </div>
          <div className="rounded-6 sm:rounded-12 relative mt-34 mb-80 aspect-[1093/420] w-full overflow-hidden sm:mb-90 md:mt-14 lg:mt-70 lg:mb-110">
            <ImageWithSkeleton
              src="/images/hero/handshake.jpg"
              alt="Рукопожатие"
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
