import type { PressRelease } from "@/app/(content)/presse/type";
import Image from "next/image";
import InitiativeAbschluss from "@/app/_pictures/abschluss-volksinitiative-unterschriften.jpg";

export default {
  slug: "hamburger-zukunftsentscheid-nimmt-erste-huerde-fuer-die-aenderung-des-klimagesetzes",
  title:
    "Hamburger Zukunftsentscheid nimmt erste Hürde für die Änderung des Klimagesetzes",
  date: "30.01.2024",
  description: (
    <>
      Hamburger Zukunftsentscheid nimmt erste Hürde für die Änderung des
      Klimagesetzes Der Hamburger Zukunftsentscheid hat in einem Sechstel der
      gesetzlich vorgesehenen Zeit die Unterschriften für eine erfolgreiche
      Volksinitiative gesammelt. Die Unterschriften werden am...
    </>
  ),
  image: (
    <Image
      src={InitiativeAbschluss}
      alt=""
      placeholder="blur"
      className="w-full"
    />
  ),
} satisfies PressRelease;
