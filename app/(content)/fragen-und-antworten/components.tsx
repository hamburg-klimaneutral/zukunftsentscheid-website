import * as Accordion from "@radix-ui/react-accordion";
import React from "react";

interface ItemProps {
  title: string;
  children?: React.ReactNode;
}

function Item({ title, children }: ItemProps) {
  return (
    <Accordion.Item value={title} className="px- bg-white px-5 py-3">
      <Accordion.Header>
        <Accordion.Trigger className="accordion-trigger flex w-full justify-between">
          <h3>{title}</h3>
          <button className="accordion-chevron">Down</button>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <article className="markdown">{children}</article>
      </Accordion.Content>
    </Accordion.Item>
  );
}

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="h2 mb-15 text-center">{title}</h2>
      <Accordion.Root
        defaultValue="Warum gibt es den Hamburger Zukunftsentscheid?"
        type="single"
        className="flex flex-col gap-2"
      >
        {children}
      </Accordion.Root>
    </section>
  );
}

export const FAQ = {
  Item,
  Section,
};
