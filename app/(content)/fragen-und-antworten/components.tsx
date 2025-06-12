import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import Image from "next/image";

interface ItemProps {
  title: string;
  children?: React.ReactNode;
}

function Item({ title, children }: ItemProps) {
  return (
    <Accordion.Item value={title} className="px- bg-white px-5 py-3">
      <Accordion.Header>
        <Accordion.Trigger className="accordion-trigger flex w-full items-start justify-between">
          <h3>{title}</h3>
          <Image
            className="accordion-chevron"
            width={24}
            height={24}
            src="/icons/chevron-down-circle.svg"
            alt=""
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="accordion-content">
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
    <section className="w-full">
      <h2 className="h2 mb-15 text-center">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}

interface RootProps {
  children?: React.ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <Accordion.Root collapsible type="single" className="w-full">
      {children}
    </Accordion.Root>
  );
}

export const FAQ = {
  Root,
  Section,
  Item,
};
