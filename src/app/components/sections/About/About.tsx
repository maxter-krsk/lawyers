import { Title } from "../../ui/Title";
import { Separator } from "@/lib/ui/separator";

const about = [
  {
    title: "Наша миссия",
    descr: "Надёжная правовая защита бизнеса и граждан",
  },
  {
    title: "Работаем по всей России",
    descr: "От федеральных до региональных дел",
  },
  {
    title: "Нам доверяют",
    descr:
      "Представители строительства, промышленности, спорта, медицины и IT, а также руководители и частные лица",
  },
];

export function About() {
  return (
    <section className="mb-80 sm:mb-90 lg:mb-110">
      <div className="container">
        <div className="mb-34 flex flex-col items-center text-center sm:flex-row sm:items-start sm:justify-between sm:text-left md:mb-24 lg:mb-40">
          <Title className="mb-34 basis-1/2 whitespace-nowrap sm:mb-0">О нас</Title>
          <div>
            <h2 className="text-28 lg:text-46 mb-10 font-medium">
              Коллегия адвокатов «Щербаков, Степанова и партнёры»
            </h2>
            <p className="text-16 lg:text-18 font-light">
              — команда юристов с едиными принципами и высоким профессиональным уровнем. Уже более
              20 лет мы защищаем интересы клиентов в судах и госорганах
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {about.map((item, index) => (
            <li key={index}>
              <h3 className="text-16 lg:text-18 xs:mb-14 mb-10 font-light uppercase">
                {item.title}
              </h3>
              <Separator className="bg-green xs:mb-14 mb-10 w-full" />
              <p className="text-16 font-extralight">{item.descr}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
