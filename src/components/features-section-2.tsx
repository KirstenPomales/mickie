import Image from "next/image";

import { StatItem } from "@/components/stat-item";

export function FeaturesSection2() {
  return (
    <section className="container flex max-w-6xl flex-col gap-20 py-24 md:flex-row md:items-center">
      <div className="relative order-1 flex-1 overflow-hidden rounded-t-[2.5rem] rounded-br-[5rem] bg-gradient-to-br from-secondary to-primary pt-10 md:order-none">
        <Image alt="SaaS Dashboard" src="/images/$APE-(2).png" width={500} height={0} />
      </div>
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-left font-heading font-bold italic text-primary">
            Trading Like A Human
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            capabilities to trade on major dexs
          </h2>
        </div>
        <p className="max-w-lg text-balance text-left text-lg text-muted-foreground">
          Gain valuable insights to make informed decisions and optimize your strategy for continued
          success.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Increase in Impressions" value="18%" />
          <StatItem label="Followers count growth" value="2.5X" />
        </div>
      </div>
    </section>
  );
}
