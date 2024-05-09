import Image from "next/image";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";

export default function Home() {
  return (
    <main className=" max-xl: max-w-screen-2xl px-8 pb-32 text-gray-900 lg:px-12">
      <Hero/>
      <Steps/>
    </main>
  );
}
