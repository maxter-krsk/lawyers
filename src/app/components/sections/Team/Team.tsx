import { Title } from "../../ui/Title";
import { TeamSlider } from "./TeamSlider";

export function Team() {
  return (
    <section data-reveal id="team" className="mb-80 sm:mb-90 lg:mb-110">
      <div className="container">
        <div className="sm:item-start mb-34 flex flex-col items-center justify-between gap-34 text-center sm:flex-row sm:items-start sm:text-left md:mb-24 md:gap-50 lg:mb-40">
          <Title>Команда</Title>
          <p className="text-16 lg:text-18 font-extralight md:font-light">
            Мы искренне вовлечены в дела клиентов, регулярно повышаем квалификацию, делимся знаниями
            и всегда на связи. У нас более 20 лет профессионального стажа. Адвокаты коллегии владеют
            иностранными языками, что позволяет детально погрузиться в дела с иностранным элементом,
            вести прямые переговоры с иностранными коллегами, анализировать документы и правовые
            положения иностранного законодательства. Коллегия плодотворно сотрудничает с
            переводчиками (английский/китайский язык), обеспечивая возможность использования в
            качестве доказательств документов иностранного происхождения
          </p>
        </div>
        <TeamSlider />
      </div>
    </section>
  );
}
