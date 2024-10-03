"use client";

import LangApp from "./langApp";
import { ModeToggle } from "./modeToggle";

function Header() {
  return (
    <div className="flex p-10  justify-between">
      <div className="flex gap-8">
        <LangApp />
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
