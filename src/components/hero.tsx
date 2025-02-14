"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 via-70% pb-28 pt-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left column with text content */}
          <div className="flex flex-col items-start gap-8">
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              the framework for&nbsp;
              <span className=" bg-clip-text text-primary">
                <span className="underline">autonamous</span> trading agents
              </span>
            </motion.h1>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="max-w-lg text-lg text-muted-foreground sm:text-xl"
            >
              we launched the first ever fully autonamous trading agent in February, 2024. now,
              we&apos;re building the framework to empower others to do the same.
            </motion.p>
            <motion.div
              animate={{ y: 0.4, opacity: 1 }}
              initial={{ y: 10, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex gap-4"
            >
              <Button asChild>
                <Link
                  href="https://x.com/cookfiai"
                  target="_blank"
                  className="cursor-pointer text-black"
                >
                  Follow Updates
                </Link>
              </Button>
              <Button asChild>
                <Link href="#about" className="cursor-pointer bg-secondary text-white">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right column with character image */}
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative size-[500px]">
              <Image
                src="/images/young-mickie-square.png"
                alt="AI Trading Assistant"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
