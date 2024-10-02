"use client";

import LangApp from "./LangApp";

function Header() {
  return (
    <div className="flex p-10  justify-between">
      <h1>Header</h1>
      <h1>Logo</h1>
      <div className="flex gap-8">
        <button>Theme Selector</button>
        <LangApp />
      </div>
    </div>
  );
}

export default Header;
