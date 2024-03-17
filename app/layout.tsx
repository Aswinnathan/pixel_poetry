import * as React from "react";
import Image from "next/image";

import "@/app/globals.css";

export const metadata = {
  title: "Pixel Poetry",
  description: "Pixel Poetry",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <Image src={`/logo.png`} alt={"Logo"} width="250" height="250" />
          </div>
          <button className="bg-white py-5 px-10 font-black rounded-md">
            BOOK YOUR EVENT
          </button>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
