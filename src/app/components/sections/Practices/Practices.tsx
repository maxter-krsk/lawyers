import { Title } from "../../ui/Title";
import { practices } from "./practices.data";
import { PracticesAccordion } from "./PracticesAccordion";

export function Practices() {
  return (
    <section id="practices" className="mb-80 sm:mb-90 lg:mb-110">
      <div className="container">
        <div className="sm:item-start mb-34 flex flex-col items-center justify-between gap-34 text-center sm:flex-row sm:items-start sm:text-left md:mb-24 md:gap-50 lg:mb-40">
          <Title>Практики</Title>
          <p className="text-16 lg:text-18 font-extralight md:font-light">
            Обширный 20-летний опыт, высокие профессиональные навыки и четкое понимание
            бизнес-контекста и потребностей доверителей позволяют нам разрабатывать индивидуальные и
            устойчивые решения даже в сложных юридических вопросах
          </p>
        </div>

        <div className="bg-green w-full border-0" />

        <PracticesAccordion items={practices} />
      </div>
    </section>
  );
}
