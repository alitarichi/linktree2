import Image from "next/image";
import Header from "../components/header";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="items-center flex justify-center">
        <Header />
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
        <h1 className="text-2xl font-bold">DOMION</h1>
        <h2 className="text-lg">Robot Influencer</h2>
      </div>
      <div className="items-center justify-center flex gap-4 pt-8">
        <Image src="/facebook2.png" alt="facebook" width={32} height={32} />
        <Image src="/instagram2.png" alt="instagram" width={32} height={32} />
        <Image src="/telegram.png" alt="telegram" width={32} height={32} />
        <Image src="/linkedin2.png" alt="linkedin" width={32} height={32} />
        <Image src="/youtube2.png" alt="youtube" width={32} height={32} />
      </div>
      <div>
        <Button>Website</Button>
      </div>
    </>
  );
}
