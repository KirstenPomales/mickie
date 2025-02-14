"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

import { CtaButton } from "@/components/cta-button";

export function TextSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Section Meet Muriel */}
        <div>
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            meet&nbsp;
            <span className=" bg-clip-text text-primary">Mickie</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p className="font-bold">
                <a
                  href="https://en.wikipedia.org/wiki/Muriel_Siebert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Muriel &quot;Mickie&quot; Seibert
                </a>{" "}
                was the first woman to become a trader at the New York Stock Exchange.
              </p>
              <p>In 1967, she changed the rules of trading.</p>
              <p>Today, Mickie.AI is doing the same.</p>
              <p>
                Mickie.AI is a framework for building fully autonomous trading agents; extending the
                core{" "}
                <a
                  href="https://www.elizaos.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ElizaOS
                </a>{" "}
                agent framework to enable the work streams, thought processes, and data access
                points needed for intelligent trading.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Section Vision */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            the&nbsp;
            <span className=" bg-clip-text text-primary">vision</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p className="">
                In the next years, we know that agents will handle most if not all aspects of
                trading on behalf of investors. We&apos;re here to make that timeline as short as
                possible by fueling a Cambrian Explosion of automatous trading agents - iterating
                and improving together.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Section Origin Story */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            origin story
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p>
                In February 2025 our team created the{" "}
                <a
                  href="https://x.com/kirstenrpomales/status/1890307803639615512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  first ever autonomous trading agent
                </a>{" "}
                during an AI agent Hackathon. We wanted to answer the question: why has no one
                launched a fully autonomous trading agent? There are so many teams that are claiming
                to be &quot;working on&quot; autonomous trading agents; raising funds, launching
                tokens, and doing marketing for their products. But, none of them have launched a
                real agent. <span className="italic">Could it really be so hard?</span>
              </p>
              <p>On Friday February 7th it went live.</p>
              <p>
                In it&apos;s first week, our agent completed over 6000 trades on mainnet in a matter
                of days, and made some trades that had over 400% profit.
              </p>
              <p>
                But, through launching the first autonomous trading agent,{" "}
                <span className="italic">we also learned why no one had done so before.</span>
              </p>
              <p>
                There is a big innovation gap in autonomous trading agents, and it&apos;s for a good
                reason.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Section Innovation Gap */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            solving the <span className=" bg-clip-text text-primary">innovation gap</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p className="font-bold">It is hard to make autonomous trading agents profitable.</p>
              <p>
                With our agent, even though she makes <span className="italic">some trades</span>{" "}
                that are highly profitable, in the end she&apos;s still loosing money. It will be a
                long process of iteration to get to the point of where agents are profitable - let
                alone able to compete with the other option on the market for automatized trading:
                trading bots.
              </p>
              <p>
                Compared to trading bots, which just automate complex mathematical algorithms to
                place profitable trades, autonomous trading agents are totally inferior today.
              </p>
              <p>
                Despite this, we believe that <span className="italic">eventually</span> autonomous
                trading agents will be able to compete with algorithmic trading bots: in between
                today and that day,{" "}
                <span className="font-bold">we&apos;re facing a BIG innovation gap</span>.
              </p>
              <p>What will get us across this chasm?</p>
              <p className="font-bold">Iteration and knowledge sharing.</p>
              <p>
                The more teams building autonomous trading agents, sharing each other&apos;s
                learnings, and iterating off each other&apos;s code the better. The more we iterate,
                the faster we will get to the day where agent&apos;s aren&apos;t just profitable,
                but are capable of powering financial market efficiency at levels we&apos;ve never
                seen before.
              </p>
              <p className="font-bold">The future of autonomous agents depends on this.</p>
              <p className="font-bold">That&apos;s why we&apos;re taking action.</p>
            </div>
          </motion.div>
        </div>

        {/* Section Current Incentives */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            current incentives are{" "}
            <span className=" bg-clip-text text-primary">killing innovation</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p>No one wants to launch an autonomous agent that is not profitable.</p>
              <p>
                But, if no one is launching these agents publicly, iteration is doomed to be slow
                and inefficient.
              </p>
              <p className="font-bold">
                This fear to launch agents that aren&apos;t yet profitable is compounded by many of
                the &quot;teams working on autonomous agents&quot; already having raised VC capital
                and launched a token.
              </p>
              <p>
                If they deploy and share an agent that is not profitable, then this is something
                that could have dramatic negative effects on their token price and appeal to venture
                capital.
              </p>
              <p>
                In the earliest days, all autonomous trading agents will be highly unprofitable.
              </p>
              <p>
                We need a way to incentivize the development of these unprofitable agents, until the
                point where innovation breaks the barrier of profitability.
              </p>
              <p className="font-bold">The future of autonomous agents depends on this.</p>
            </div>
          </motion.div>
        </div>

        {/* Section Mickie on a Mission */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            MickieAI on a <span className="bg-clip-text text-primary">Mission</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p className="font-bold">
                It&apos;s our mission to build a framework and coalition of teams working to help
                autonomous agents cross the innovation gap.
              </p>
              <p>We are working on:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Open-sourcing our framework for autonomous agent development: A framework based on
                  our agent - the first autonomous trading agent live on mainnet. A fast to
                  configure and easily extensible framework designed to enable rapid iteration.
                </li>
                <li>
                  Building integrations with existing AI agent frameworks and tools: A rising tide
                  lifts all ships. We need to be working together to enable the agentic future.
                </li>
                <li>
                  Launching autonomous trading agents: Iterating fast on our own agents within out
                  own developer collective, and sharing all of our learnings in public.
                </li>
              </ol>
              <p>
                Sound like something you want to be a part of?{" "}
                <a
                  href="https://t.me/hellokirsten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  DM Kirsten on Telegram.
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section About The Framework */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            about the <span className="bg-clip-text text-primary">framework</span>
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p>The Mickie.AI Framework is currently in development and evolving rapidly.</p>
              <p>We aim to publish a first version near the end of February 2024.</p>
              <p>
                In the meantime, we have public information on our original fully autonomous trading
                agent. This agent is live on Solana mainnet and making trades today.
                <span className="font-bold">
                  {" "}
                  We are basing the framework off of this agent,
                </span>{" "}
                and therefore it&apos;s a great starting point for teams that want to start shipping
                NOW!
              </p>
              <p>
                It&apos;s 100% open-source and{" "}
                <span className="font-bold">can be forked and iterated upon today!</span>
              </p>
              <div className="space-y-2">
                <p>
                  <a
                    href="https://github.com/Cookfi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    CookFI AI Github
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.cookfi.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    CookFi AI Website
                  </a>
                </p>
                <p>
                  <a
                    href="https://x.com/kirstenrpomales/status/1890307803639615512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    CookFI AI Tutorial and Architecture Review
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <div className="flex items-start gap-3">
                  <Info className="mt-1 size-5 shrink-0 text-primary" />
                  <p>
                    Our origional autonamous trading agent was under the brand CookFi AI during a
                    hackathon.{" "}
                    <span className="font-bold">
                      We&apos;re in the process of merging the CookFi codebase with{" "}
                      <a
                        href="https://x.com/ElyraiAgent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Elyrai AI
                      </a>
                    </span>
                    , another agent we maintain. The Elyrai AI agent which will be our main example
                    agent using the Mickie.AI Framework going forward. As we extend the framework
                    and add new partner technologies, we will continue updating Elyrai AI and using
                    it as a case study for other teams to leverage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Contributors */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            contributors
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p>
                We&apos;re a developer collective that&apos;s been building products together for
                years. Now, we&apos;re growing the movement behind Mickie.AI.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    <a
                      href="https://github.com/0xromain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Romain
                    </a>
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>15 years senior engineer, with over 7 years leading teams in web3</li>
                    <li>
                      led engineering for 25+ person open-source community building{" "}
                      <a
                        href="https://docs.talentlayer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        TalentLayer
                      </a>
                      , an infra for decentralized marketplaces
                    </li>
                    <li>
                      former CTO of Europe&apos;s largest sports data infrastructure, with over a
                      million daily active users
                    </li>
                    <li>passionate about sovereignty and using tech to help humanity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    <a
                      href="https://www.kirstenpomales.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Kirsten
                    </a>
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>2x venture backed founder and self-taught software developer</li>
                    <li>
                      Partner at{" "}
                      <a
                        href="https://www.recursive.so/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Recursive
                      </a>
                      , a development studio specializing in{" "}
                      <a
                        href="https://www.elizaos.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        ElizaOS
                      </a>{" "}
                      agent development
                    </li>
                    <li>
                      led operations for 25+ person open-source community building{" "}
                      <a
                        href="https://docs.talentlayer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        TalentLayer
                      </a>
                      , an infra for decentralized marketplace
                    </li>
                    <li>
                      led the{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        IEEE&apos;s
                      </a>{" "}
                      Blockchain Governance Working Group, growing it from 0 to 200 open-source
                      contributors between 2018 and 2020
                    </li>
                    <li>
                      former political coalition builder; lobbying for 4 years on issues around
                      freedom & innovation in the United States
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    <a
                      href="https://x.com/PautardR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Raph
                    </a>
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      founder of{" "}
                      <a
                        href="https://x.com/ElyraiAgent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Elyrai
                      </a>{" "}
                      AI agent
                    </li>
                    <li>
                      founded Europe&apos;s largest crypto association,{" "}
                      <a
                        href="https://kryptosphere.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Kryptosphere
                      </a>
                    </li>
                    <li>
                      hosted incubator programs helping dozens of teams launch crypto and AI
                      startups
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    <a
                      href="https://github.com/yashgo0018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Yash
                    </a>
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Ethereum Foundation funded blockchain engineer and researcher</li>
                    <li>Former founding engineer at multiple venture-backed</li>
                    <li>
                      Former{" "}
                      <a
                        href="https://docs.talentlayer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        TalentLayer
                      </a>{" "}
                      contributor
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    <a
                      href="https://github.com/pranav-singhal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Pranav
                    </a>
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Senior blockchain developer and educator</li>
                    <li>
                      Partner at{" "}
                      <a
                        href="https://www.recursive.so/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Recursive
                      </a>
                      , a development studio specializing in ElizaOS agent development
                    </li>
                    <li>Won the first ETH India in 2018</li>
                    <li>
                      Former{" "}
                      <a
                        href="https://docs.talentlayer.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        TalentLayer
                      </a>{" "}
                      core team member
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Join Us */}
        <div className="pt-20">
          <motion.h2
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            join us
          </motion.h2>
          <motion.div
            animate={{ y: 0.4, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="mt-6 space-y-6 text-base text-white">
              <p>
                We believe we&apos;re working on the most exciting emergent area of AI agent
                development.
              </p>
              <p>If you believe the same, join us.</p>
              <p>
                <a
                  href="https://t.me/hellokirsten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  DM Kirsten on Telegram
                </a>{" "}
                to get looped in and join the developer collective.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
