import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-screen items-center justify-center text-center">
      <div className="container">
        <h1 className="text-green mb-30 text-[9.375rem] leading-none font-medium uppercase sm:mb-50 sm:text-[18.75rem]">
          4<span className="text-orange">0</span>4
        </h1>
        <p className="text-18 mb-30 font-light uppercase sm:mb-50">Упс... страница не найдена</p>
        <Link
          href="/"
          className="group hover:text-orange relative inline-block pb-6 pl-6 font-extralight tracking-[0.188rem] transition-colors duration-300"
        >
          <span
            aria-hidden
            className="border-green pointer-events-none absolute top-0 left-0 h-full origin-bottom scale-y-100 border-l transition-transform delay-300 duration-300 ease-out group-hover:scale-y-0 group-hover:delay-0"
          />
          <span
            aria-hidden
            className="border-green pointer-events-none absolute bottom-0 left-0 w-full origin-right scale-x-100 border-b transition-transform delay-0 duration-300 ease-out group-hover:scale-x-0 group-hover:delay-250"
          />
          вернуться на главную
        </Link>
      </div>
    </section>
  );
}
