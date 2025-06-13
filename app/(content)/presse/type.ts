import { JSX } from "react";

export interface PressRelease {
  title: string;
  date: string;
  slug: string;
  description: JSX.Element;
}
