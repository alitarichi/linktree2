"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modeToggle";

const useLanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  return { isEnglish, toggleLanguage };
};

export default function Page() {
  const { isEnglish, toggleLanguage } = useLanguageToggle();
  return (
    <>
      <div className="items-center flex justify-end p-16 gap-16 ">
        <ModeToggle />
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isEnglish ? "Farsi 🇮🇷" : "English 🇺🇸"}
        </button>
      </div>
      <div className="flex-row items-center text-center">
        <div className="flex items-center justify-center pb-8">
          <Image
            src="/profile.png"
            alt="profile"
            width={160}
            height={160}
            className="flex items-center justify-center"
          />
        </div>
        <h1 className="text-2xl font-bold">
          {isEnglish ? "Your Name" : "نام"}
        </h1>
        <h2 className="text-lg">Influencer</h2>

        <div className="items-center justify-center flex gap-4 pt-8">
          <Image src="/facebook2.png" alt="facebook" width={32} height={32} />
          <Image src="/instagram2.png" alt="instagram" width={32} height={32} />
          <Image src="/telegram.png" alt="telegram" width={32} height={32} />
          <Image src="/linkedin2.png" alt="linkedin" width={32} height={32} />
          <Image src="/youtube2.png" alt="youtube" width={32} height={32} />
        </div>
        <div className="flex flex-col">
          <Button
            className="flex gap-2 items-center justify-center 
    mx-auto w-full mt-8 px-8  md:max-w-3xl sm:max-w-xl"
          >
            {isEnglish ? "Website" : "وب‌ سایت"}
            <Image src="/internet.png" alt="telegram" width={24} height={24} />
          </Button>
          <Button
            className="flex gap-2 items-center justify-center 
    mx-auto w-full mt-8 px-8  md:max-w-3xl sm:max-w-xl"
          >
            {isEnglish ? "Address" : "آدرس"}
            <Image src="/location.png" alt="telegram" width={24} height={24} />
          </Button>
          <Button
            className="flex gap-2 items-center justify-center 
    mx-auto w-full mt-8 px-8  md:max-w-3xl sm:max-w-xl"
          >
            {isEnglish ? "Contact Us" : "با ما تماس بگیرید"}
            <Image
              src="/phone-call.png"
              alt="telegram"
              width={24}
              height={24}
            />
          </Button>
          <Button
            className="flex gap-2 items-center justify-center 
    mx-auto w-full mt-8 px-8  md:max-w-3xl sm:max-w-xl"
          >
            {isEnglish ? "Chat via Telegram" : "چت از طریق تلگرام"}
            <Image src="/telegram.png" alt="telegram" width={24} height={24} />
          </Button>
          <Button
            className="flex gap-2 items-center justify-center 
    mx-auto w-full mt-8 px-8  md:max-w-3xl sm:max-w-xl"
          >
            {isEnglish ? "Chat via Signal" : "چت از طریق سیگنال"}
            <Image src="/signal.png" alt="telegram" width={24} height={24} />
          </Button>
        </div>
      </div>
    </>
  );
}
