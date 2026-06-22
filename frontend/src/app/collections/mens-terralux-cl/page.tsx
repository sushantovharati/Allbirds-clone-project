import { Metadata } from "next";
import MensTerraluxClient from "./MensTerraluxClient";

export const metadata: Metadata = {
  title: "Men's Terralux™ Collection",
};

export default function Page() {
  return <MensTerraluxClient />;
}