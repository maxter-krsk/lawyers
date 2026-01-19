import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";

const nav: [string, string][] = [
  ["О компании", "/#about"],
  ["Команда", "/#team"],
  ["Преимущества", "/#features"],
  ["Практики", "/#practices"],
];

type HeaderProps = {
  variant: "top" | "side";
};

export default function Header({ variant }: HeaderProps) {
  if (variant === "top") {
    return (
      <header className="bg-white">
        <div className="relative container flex min-h-16 items-center justify-end py-14">
          {/* Центр */}
          <Link href="/" aria-label="На главную" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/icons/logos/logo-short.svg"
              alt="Логотип"
              width={68}
              height={46}
              className="h-auto w-62"
              priority
            />
          </Link>

          <div className="w-42">
            <Burger className="w-full" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 right-0 h-screen bg-white">
      <div className="container flex h-full flex-col items-center py-20 md:items-start">
        <nav className="hidden md:block">
          <ul className="text-18 flex flex-col space-y-10 uppercase">
            {nav.map(([label, href], index) => (
              <li key={href} className={index === 1 ? "mb-40" : undefined}>
                <Link className="hover-link" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full md:hidden">
          <Burger className="w-full" />
        </div>

        {/* LOGO */}
        <div className="my-auto">
          <Link href="/" aria-label="На главную" className="block">
            <Image
              className="hidden h-auto w-[19.188rem] md:block"
              src="/icons/logos/logo-full.svg"
              alt="Логотип"
              width={307}
              height={177}
              priority
            />
            <Image
              className="block h-auto w-[68px] md:hidden"
              src="/icons/logos/logo-short.svg"
              alt="Логотип"
              width={68}
              height={46}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
