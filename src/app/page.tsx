import Image from "next/image";
import Header from "../components/header";
import { ModeToggle } from "../components/modeToggle";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <ModeToggle />
      </div>
    </>
  );
}
