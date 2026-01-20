"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../../ui/Title";
import { Separator } from "@/lib/ui/separator";
import { Accordion, AccordionItem } from "@/lib/ui/accordion";

const practices = [
  {
    title: "Проектное сопровождение бизнеса/деятельности",
    image: "/images/practices/business-law.jpg",
    alt: "Проектное сопровождение бизнеса/деятельности",
    number: "<01>",
    content: (
      <div className="space-y-10 font-light sm:space-y-14">
        <p className="text-16 sm:text-18">
          В рамках нашего проверенного подхода мы предлагаем комплексное сопровождение: от первичных
          консультаций до полного административного оформления и документирования деятельности
          вашего бизнеса
        </p>
        <p className="text-16 sm:text-18">
          Наша коллегия охватывает все правовые аспекты деятельности компании:
        </p>
        <ul className="custom-list text-14 sm:text-16 space-y-8 font-extralight">
          <li>Создание и реорганизация компаний</li>
          <li>Корпоративные и коммерческие споры</li>
          <li>Сделки и договоры</li>
          <li>Законодательство о конкуренции и товарных знаках</li>
          <li>Государственные закупки</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Уголовная практика",
    image: "/images/practices/criminal-law.jpg",
    alt: "Уголовная практика",
    number: "<02>",
    content: (
      <div className="space-y-14 font-light">
        <p className="text-16 sm:text-18">
          Мы представляем интересы подозреваемых, обвиняемых и потерпевших по уголовным делам на
          всех стадиях процесса — от первых проверочных мероприятий до обжалования приговора
        </p>
        <p className="text-16 sm:text-18">
          Мы работаем как с частными лицами, так и с бизнесом, включая дела о:
        </p>
        <ul className="custom-list text-14 sm:text-16 space-y-8 font-extralight">
          <li>Должностных и коррупционных преступлениях</li>
          <li>Экономических и налоговых преступлениях</li>
          <li>Преступлениях в сфере предпринимательской деятельности</li>
          <li>Преступлениях против собственности</li>
          <li>Преступлениях против личности</li>
          <li>Ятрогенных (медицинских) преступлениях</li>
        </ul>
        <p className="text-16 sm:text-18">
          В сложной стрессовой ситуации наша задача — быстро включиться в дело, защитить ваши права
          и минимизировать последствия
        </p>
      </div>
    ),
  },
  {
    title: "Брачно-семейные и наследственные споры",
    image: "/images/practices/family-inheritance-law.jpg",
    alt: "Брачно-семейные и наследственные споры",
    number: "<03>",
    content: (
      <div className="space-y-14 font-light">
        <p className="text-16 sm:text-18">
          Одно из ключевых направлений нашей работы — сопровождение правовых споров в сфере
          семейного и наследственного права:
        </p>
        <ul className="custom-list text-14 sm:text-16 space-y-8 font-extralight">
          <li>Расторжение брака; раздел совместно нажитого имущества</li>
          <li>
            Определение порядка общения с детьми и определения их места жительства;
            установление/оспаривание отцовства; взыскание алиментов
          </li>
          <li>Сопровождение при оформлении наследственных прав</li>
          <li>Раздел наследственного имущества</li>
        </ul>
        <p className="text-16 sm:text-18">
          Помогаем пройти через семейный конфликт и утрату максимально бережно — с минимумом эмоций
          в процессе и с юридически выверенным результатом
        </p>
      </div>
    ),
  },
  {
    title: "Правовое сопровождение избирательных кампаний",
    alt: "Правовое сопровождение избирательных кампаний",
    image: "/images/practices/election-law.jpg",
    number: "<04>",
    content: (
      <div className="space-y-14 font-light">
        <p className="text-16 sm:text-18">
          С 2001 года сопровождаем избирательные кампании от этапа выдвижения кандидатов до
          подведения результатов выборов
        </p>
        <p className="text-16 sm:text-18">Мы помогаем:</p>
        <ul className="custom-list text-14 sm:text-16 space-y-8 font-extralight">
          <li>Оценить правовые риски</li>
          <li>Подготовить все необходимые документы</li>
          <li>Выстроить законную агитационную кампанию</li>
        </ul>
        <p className="text-16 sm:text-18">
          Деятельность нашей команды направлена на представление ваших интересов в рамках
          избирательной кампании, включая защиту по делам об административных правонарушениях и
          уголовным делам, защиту чести, достоинства, деловой репутации кандидатов в связи с
          избирательным процессом
        </p>
      </div>
    ),
  },
  {
    title: "Защита чести и деловой репутации",
    image: "/images/practices/reputation-defense.jpg",
    alt: "Защита чести и деловой репутации",
    number: "<05>",
    content: (
      <div className="space-y-14 font-light">
        <p className="text-16 sm:text-18">
          От правового аудита до судебных исков. Добиваемся опровержения ложных сведений,
          компенсации ущерба и восстановления нарушенной репутации, представляем интересы в судах и
          медиапространстве
        </p>
      </div>
    ),
  },
];

export function Practices() {
  const [openValue, setOpenValue] = useState("");

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

        <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue}>
          {practices.map((item, index) => {
            const isOpen = openValue === item.number;

            return (
              <AccordionItem key={item.number} value={item.number} className="border-0">
                <button
                  type="button"
                  onClick={() => setOpenValue(isOpen ? "" : item.number)}
                  className="w-full cursor-pointer text-left"
                >
                  <div className="relative w-full py-10 sm:py-14">
                    <div className="grid w-full grid-cols-[11rem_1fr_auto] items-start gap-10 md:grid-cols-[11rem_16.25rem_auto] lg:grid-cols-[11rem_16.25rem_1fr_auto]">
                      <div className="flex h-full flex-col justify-between md:mr-10 lg:mr-0">
                        <h2 className="text-14 lg:text-16 pb-20 uppercase">{item.title}</h2>

                        <span className="text-14 border-green w-fit border-b border-l pb-0 pl-6 font-extralight">
                          <span className="relative inline-block overflow-hidden leading-none">
                            <AnimatePresence initial={false} mode="wait">
                              {isOpen ? (
                                <motion.span
                                  key="hide"
                                  className="block"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                  Скрыть
                                </motion.span>
                              ) : (
                                <motion.span
                                  key="more"
                                  className="block"
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -6 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                  Подробнее
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </span>
                        </span>
                      </div>

                      <div className="flex shrink-0 lg:ml-auto lg:justify-center">
                        <div
                          className={`rounded-6 xs:rounded-12 aspect-square w-[9.063rem] overflow-hidden transition-[width] duration-500 ${
                            isOpen
                              ? "sm:w-[11.875rem] md:w-[16.25rem] lg:w-[16.25rem]"
                              : "sm:w-[9.063rem] md:w-[9.063rem] lg:w-[7.813rem]"
                          } `}
                        >
                          <Image
                            className={`h-full w-full object-cover transition-transform duration-500 ease-out ${isOpen ? "scale-[1.06] sm:scale-100" : "scale-100"} `}
                            src={item.image}
                            alt={item.alt}
                            width={260}
                            height={260}
                          />
                        </div>
                      </div>

                      <span className="text-12 lg:text-16 text-grayLight justify-self-end pt-2 font-extralight lg:col-start-4">
                        {item.number}
                      </span>

                      <motion.div
                        className="hidden pr-40 lg:col-start-3 lg:row-start-1 lg:block lg:pl-60"
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          y: isOpen ? 0 : 8,
                          maxHeight: isOpen ? 1000 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: isOpen ? 0.08 : 0 }}
                        style={{ overflow: "hidden", pointerEvents: isOpen ? "auto" : "none" }}
                      >
                        {item.content}
                      </motion.div>
                    </div>

                    <motion.div
                      className="mt-10 sm:mt-14 lg:hidden"
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : 8,
                        maxHeight: isOpen ? 1000 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: isOpen ? 0.08 : 0 }}
                      style={{ overflow: "hidden", pointerEvents: isOpen ? "auto" : "none" }}
                    >
                      {item.content}
                    </motion.div>
                  </div>
                </button>
                {index !== practices.length - 1 && <Separator className="bg-green w-full" />}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
