import Image from "next/image";
import { HeroSlider } from "./HeroSlider";
import { Separator } from "@/lib/ui/separator";
import { Square } from "@/lib/ui/square";

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
        <div className="mb-34 flex flex-col pt-24 sm:mb-24 md:mb-50 md:flex-row">
          <h1 className="text-28 md:text-48 lg:text-62 leading-none font-medium uppercase">
            Ваша надёжная
            <br />
            юридическая <span className="text-green">защита</span>
          </h1>

          <p className="text-14 xs:text-18 text-right font-light uppercase sm:text-left">
            Команда <span className="text-green font-light">профессионалов</span>
            <br />
            для бизнеса и частных лиц
          </p>
        </div>
        <div className="relative">
          <Separator className="bg-green hidden w-full sm:block" />
          <Square className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block" />
          <div className="flex flex-col sm:flex-row items-stretch">
            <ul className="flex basis-1/2 flex-col gap-8 pt-40">
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
              className="bg-green hidden min-h-[12.875rem] sm:block"
            />

            <div className="min-w-0 flex-1 basis-1/2 p-0 sm:pt-24 sm:pl-24 lg:pt-40 lg:pl-32">
              <HeroSlider />
            </div>
          </div>
          <div className="rounded-12 relative mt-70 mb-110 aspect-[1093/420] w-full overflow-hidden">
            <Image
              src="/images/hero/handshake.jpg"
              alt="Рукопожатие"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
