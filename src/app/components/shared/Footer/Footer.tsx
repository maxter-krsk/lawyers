import Image from "next/image";
import Link from "next/link";
import DevelopedBy from "@/app/components/ui/DevelopedBy";

const footerNav: [string, string][] = [
  ["О компании", "/#about"],
  ["Команда", "/#team"],
  ["Преимущества", "/#features"],
  ["Практики", "/#practices"],
];

const contacts = [
  {
    src: "/icons/ui/email-light.svg",
    alt: "Почта",
    title: "a2347711@ya.ru",
    href: "mailto:a2347711@ya.ru",
  },
  {
    src: "/icons/ui/phone-light.svg",
    alt: "Телефон",
    title: "+7 (391) 234‑77‑11",
    href: "tel:+73912347711",
  },
  {
    src: "/icons/ui/location-light.svg",
    alt: "Местоположения",
    title: "г. Красноярск, ул. Ладо Кецховели, 22А, БЦ «Спасский», офис 13‑02/3",
  },
  {
    src: "/icons/ui/zip-light.svg",
    alt: "Адрес",
    title: "660017, г. Красноярск, а/я 6130",
  },
];

const requisites = [
  { label: "ИНН", value: "2460114280" },
  { label: "ОГРН", value: "1192468029544" },
];

const legalLinks: [string, string][] = [
  ["Согласие на обработку персональных данных", "/privacy-policy"],
  ["Политика конфиденциальности", "/privacy-policy"],
  ["Согласие на условия обработки cookie-файлов", "/privacy-policy"],
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-main pt-34 pb-0 sm:py-24 lg:pt-20 lg:pb-80">
      <div className="container">
        <div className="mb-60 grid grid-cols-1 gap-36 md:mb-80 lg:grid-cols-3 lg:gap-40">
          <div className="flex flex-1 flex-col gap-40">
            <nav>
              <ul className="space-y-14">
                {footerNav.map(([label, href]) => (
                  <li key={href}>
                    <Link className="hover-link font-light text-white" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="/" className="hidden lg:block">
              <Image
                className="w-[6.875rem]"
                src="/icons/logos/logo-short.svg"
                alt="Логотип"
                width="110"
                height="74"
              />
            </Link>
          </div>
          <div className="flex flex-1 lg:justify-center">
            <div className="max-w-[32rem]">
              <ul className="space-y-14">
                {contacts.map(({ src, alt, title, href }) => (
                  <li key={title} className="flex items-start gap-10">
                    <img src={src} alt={alt} className="h-24 w-24 shrink-0" />

                    {href ? (
                      <Link href={href} className="hover-link font-light text-white">
                        {title}
                      </Link>
                    ) : (
                      <span className="font-light text-white">{title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-34 lg:gap-40">
            <ul className="space-y-14">
              {requisites.map((item) => (
                <li key={item.label} className="text-16 font-extralight text-white">
                  {item.label} {item.value}
                </li>
              ))}
            </ul>

            <ul className="space-y-8">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link className="hover-link text-14 text-grayDark font-extralight" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-14 font-extralight text-white">
              © Коллегия адвокатов «Щербаков, Степанова и партнёры», {year}
            </p>
            <Link href="/" className="block lg:hidden">
              <Image
                className="h-auto w-full"
                src="/icons/logos/logo-short.svg"
                alt="Логотип"
                width="110"
                height="74"
              />
            </Link>
          </div>
        </div>
        <DevelopedBy />
      </div>
    </footer>
  );
}
