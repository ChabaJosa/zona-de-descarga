import * as React from "react";
import Image from "next/image";

export async function Header() {
  return (
    <header
      style={{ backgroundColor: "rgb(254, 176, 21)" }}
      className="sticky top-0 z-50 flex items-center justify-between w-full h-16 pr-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl"
    >
      <div className="flex items-center">
        <Image
          className="relative"
          src="/zona-nav.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/vercel/nextjs-ai-chatbot/"
          rel="noopener noreferrer"
          //   className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <h2 className="mr-2">Quienes Somos</h2>
        </a>
        <a
          href="https://github.com/vercel/nextjs-ai-chatbot/"
          target="_blank"
          //   className={cn(buttonVariants())}
        >
          <h2 className="mr-2">Como ser parte</h2>
        </a>
      </div>
    </header>
  );
}
