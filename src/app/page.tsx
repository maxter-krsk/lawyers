import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Practices } from "./components/sections/Practices/Practices";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Practices />
    </>
  );
}
