import { TextQuote, LineChart } from "lucide-react";
import Image from "next/image";

import { FeatureItem } from "@/components/feature-item";

export function FeaturesSection3() {
  return (
    <section className="container flex max-w-6xl flex-col gap-20 py-24 md:flex-row md:items-center">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-left font-heading font-bold italic text-primary">
            The Missing Link in Trading Agents
          </span>
          <h2 className="text-balance text-left font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            bringing the &quot;autonamous&quot; back to autonamous agents
          </h2>
        </div>
        <p className="hidden max-w-lg text-balance text-left text-lg text-muted-foreground">
          Gain valuable insights to make informed decisions and optimize your strategy for continued
          success.
        </p>
        <div className="flex flex-col gap-8">
          <FeatureItem
            icon={TextQuote}
            title="Content Recommendations"
            description="AI-generated suggestions ensuring the best performance for your audience."
          />
          <FeatureItem
            icon={LineChart}
            title="Trend Analysis"
            description="Providing insights that align with current interests and maximizes impact"
          />
        </div>
      </div>
      <div className="relative flex-1 rounded-t-[2.5rem] rounded-bl-[5rem] bg-gradient-to-br from-secondary to-primary pt-10">
        <Image alt="SaaS Dashboard" src="/images/$APE-(1).png" width={600} height={400} />
      </div>
    </section>
  );
}
