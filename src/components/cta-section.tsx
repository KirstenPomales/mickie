import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="relative mt-0 flex flex-1 flex-col items-center gap-6 overflow-hidden rounded-t-[2.5rem] rounded-bl-[5rem] bg-gradient-to-br from-secondary to-primary px-6 pt-24">
        <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
          check out our demo!
        </h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          Watch our video where we show the full power of CookFi AI!
        </p>
        <Button
          size="lg"
          asChild
          variant="outline"
          className="cursor-pointer border-border bg-background"
        >
          <Link href="#">View</Link>
        </Button>
        <Image
          alt="SaaS Dashboard"
          src="/images/Group-999-(1).png"
          width={900}
          height={698}
          priority
          className="mt-0 lg:-mb-40"
        />
      </div>
    </section>
  );
}
