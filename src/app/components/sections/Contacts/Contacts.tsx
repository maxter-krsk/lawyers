import Image from "next/image";
import Link from "next/link";
import { YandexMap } from "./YandexMap";
import { Title } from "../../ui/Title";
import { Separator } from "@/lib/ui/separator";

export function Contacts() {
  return (
    <section data-reveal id="contacts" className="mb-80 sm:mb-90 lg:mb-110">
      <div className="container">
        <Title className="mb-34 justify-center sm:justify-start md:mb-24 lg:mb-40">Контакты</Title>

        <div className="flex flex-col gap-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            <Link className="group block min-w-0" href="tel:+73912347711">
              <div className="bg-main group-hover:bg-orange flex h-full items-center gap-10 p-16 font-light text-white transition-colors duration-300 lg:py-0">
                <Image className="w-24 h-24" src="/icons/ui/phone-light.svg" alt="" width={24} height={24} />
                <span className="break-words">+7 (391) 234-77-11</span>
              </div>
            </Link>

            <Link className="group block min-w-0" href="mailto:a2347711@ya.ru">
              <div className="bg-main group-hover:bg-orange flex h-full items-center gap-10 p-16 font-light text-white transition-colors duration-300 lg:py-0">
                <Image className="w-24 h-24" src="/icons/ui/email-light.svg" alt="" width={24} height={24} />
                <span className="break-words">a2347711@ya.ru</span>
              </div>
            </Link>

            <div className="bg-main flex h-full items-center gap-10 p-16 font-light text-white sm:col-span-2 lg:col-span-1 lg:py-20">
              <Image className="w-24 h-24" src="/icons/ui/location-light.svg" alt="" width={24} height={24} />
              <span className="break-words">
                г. Красноярск, ул. Ладо Кецховели, 22А, БЦ «Спасский», офис 13-02/3
              </span>
            </div>
          </div>

          <div>
            <h2 className="mb-14 font-light uppercase">Почтовый адрес</h2>
            <div className="flex items-center gap-10">
              <Image className="w-24 h-24" src="/icons/ui/zip-dark.svg" width={24} height={24} alt="" />
              <p className="font-extralight">660017, г. Красноярск, а/я 6130</p>
            </div>
          </div>

          <div>
            <Separator className="bg-green mb-14 w-full" />
            <YandexMap />
          </div>
        </div>
      </div>
    </section>
  );
}
