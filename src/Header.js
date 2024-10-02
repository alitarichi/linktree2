"use client";

import { ModeToggle } from "./app/components/ModeToggle";
import LangApp from "./LangApp";

function Header() {
  return (
    <div className="flex p-10  justify-between">
      <h1>Header</h1>
      <h1>Logo</h1>
      <div className="flex gap-8">
        <ModeToggle />
        <LangApp />
      </div>
    </div>
  );
}

export default Header;
