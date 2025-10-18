// src/components/Investment.jsx

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Progress } from "./ui/progress";
import {
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  BuildingIcon,
  HeartIcon,
  LeafIcon,
  BarChart3Icon,
} from "lucide-react";

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Investment = () => {
  // Private Market Investment Focus
  const privateMarketFocus = [
    {
      sector: "Enterprise Software",
      description:
        "B2B SaaS solutions that transform how businesses operate, collaborate, and scale",
      allocation: 35,
      icon: BuildingIcon,
      examples: [
        "CRM & Sales Tools",
        "Workflow Automation",
        "Data Analytics",
        "Developer Tools",
      ],
      recentInvestments: ["CloudSync Pro", "DevTools Pro", "DataVault"],
      investment_range: "$500K - $3M",
      stage: "Seed to Series A",
    },
    {
      sector: "Fintech",
      description:
        "Financial services technology revolutionizing payments, lending, and wealth management",
      allocation: 30,
      icon: DollarSignIcon,
      examples: [
        "Payment Processing",
        "Digital Banking",
        "Investment Platforms",
        "InsurTech",
      ],
      recentInvestments: ["PayFlow", "CryptoWallet Pro"],
      investment_range: "$750K - $5M",
      stage: "Seed to Series A",
    },
    {
      sector: "EV & CleanTech",
      description: "Electric vehicle technology and sustainable energy solutions",
      allocation: 20,
      icon: LeafIcon,
      examples: [
        "EV Manufacturing",
        "Battery Technology",
        "Charging Infrastructure",
        "Energy Storage",
      ],
      recentInvestments: ["Das Steign", "GreenEnergy Analytics"],
      investment_range: "$1M - $4M",
      stage: "Seed to Series A",
    },
    {
      sector: "HealthTech",
      description:
        "Digital health solutions improving patient outcomes and healthcare delivery",
      allocation: 15,
      icon: HeartIcon,
      examples: [
        "Telemedicine",
        "Health Analytics",
        "Medical Devices",
        "Mental Health",
      ],
      recentInvestments: ["HealthLink", "MindCare AI"],
      investment_range: "$500K - $2.5M",
      stage: "Seed to Series A",
    },
  ];

  // Public Market Investment Focus
  const publicMarketFocus = [
    {
      sector: "Technology Growth",
      description: "High-growth technology companies with proven business models",
      allocation: 40,
      icon: TrendingUpIcon,
      examples: [
        "Cloud Computing",
        "AI & Machine Learning",
        "Cybersecurity",
        "SaaS Leaders",
      ],
      strategy: "Long-term growth with selective tactical trades",
    },
    {
      sector: "Healthcare Innovation",
      description:
        "Biotech and healthcare companies driving medical innovation",
      allocation: 25,
      icon: HeartIcon,
      examples: [
        "Biotechnology",
        "Medical Devices",
        "Healthcare IT",
        "Pharmaceuticals",
      ],
      strategy: "Focus on FDA pipeline and breakthrough therapies",
    },
    {
      sector: "Sustainable Energy",
      description: "Clean energy and environmental technology leaders",
      allocation: 20,
      icon: LeafIcon,
      examples: [
        "Solar & Wind",
        "Energy Storage",
        "Electric Vehicles",
        "Smart Grid",
      ],
      strategy: "Riding the global transition to clean energy",
    },
    {
      sector: "Financial Services",
      description:
        "Established fintech and financial services companies",
      allocation: 15,
      icon: BarChart3Icon,
      examples: [
        "Payment Processors",
        "Digital Banks",
        "Wealth Management",
        "Insurance Tech",
      ],
      strategy: "Quality names with strong moats and dividends",
    },
  ];

  const investmentProcess = [
    {
      step: "1",
      title: "Initial Screening",
      description:
        "Review pitch deck and assess strategic fit with our investment thesis",
      duration: "1-2 days",
    },
    {
      step: "2",
      title: "Founder Meeting",
      description:
        "Deep dive discussion with founding team about vision, market, and product",
      duration: "1 week",
    },
    {
      step: "3",
      title: "Due Diligence",
      description:
        "Comprehensive analysis of business model, market opportunity, and team",
      duration: "2-3 weeks",
    },
    {
      step: "4",
      title: "Investment Committee",
      description:
        "Final presentation to our investment committee for funding decision",
      duration: "1 week",
    },
    {
      step: "5",
      title: "Term Sheet & Closing",
      description:
        "Negotiate terms and complete legal documentation for investment",
      duration: "2-4 weeks",
    },
  ];

  // Stats data for overview
  const stats = [
    { label: "Assets Under Management", end: 100, suffix: "M+" },
    { label: "Portfolio Companies & Positions", end: 40, suffix: "+" },
    { label: "Limited Partners & Co-Investors", end: 15, suffix: "+" },
  ];

  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="space-y-24 overflow-hidden">
      {/* HERO Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[60vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Investment Strategy
          </h1>
          <p className="text-xl text-primary­-foreground/90 leading-relaxed">
            A diversified approach combining private market venture investments
            and public market positions to create lasting value across multiple
            asset classes.
          </p>
        </motion.div>
      </section>

      {/* Stats / Fund Overview */}
      <motion.section
        ref={statsRef}
        className="container mx-auto px-4 -mt-12"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl shadow-lg border-none hover:shadow-primary/40 transition-all duration-400">
                <CardContent className="pt-8 pb-10 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {statsInView ? (
                      <CountUp
                        end={stat.end}
                        duration={2}
                        suffix={stat.suffix}
                        decimals={stat.end % 1 !== 0 ? 1 : 0}
                      />
                    ) : (
                      0
                    )}
                  </div>
                  <p className="text-white/90">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tabbed Investment Focus */}
      <section className="container mx-auto px-4">
        <Tabs defaultValue="private" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto">
            <TabsTrigger value="private">Private Market</TabsTrigger>
            <TabsTrigger value="public">Public Market</TabsTrigger>
          </TabsList>

          {/* Private Market */}
          <TabsContent value="private" className="space-y-12">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Private Market Investments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Early-stage venture investments in exceptional founders building
                transformative companies across key technology sectors.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {privateMarketFocus.map((sector, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                >
                  <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <sector.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-semibold">
                            {sector.sector}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary">
                          {sector.allocation}% allocation
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Portfolio Allocation</span>
                          <span className="text-sm">
                            {sector.allocation}%
                          </span>
                        </div>
                        <Progress value={sector.allocation} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">
                            Investment Range
                          </p>
                          <p>{sector.investment_range}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">
                            Stage Focus
                          </p>
                          <p>{sector.stage}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {sector.examples.map((example, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Recent Investments:
                        </p>
                        <p className="text-sm">
                          {sector.recentInvestments.join(", ")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Private Market Strategy</h3>
              <p className="text-muted-foreground mb-6">
                Our private market approach focuses on early-stage companies
                where we can provide not just capital but also strategic
                guidance, operational support, and access to our extensive
                network. We take a patient, long-term approach to value
                creation.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Check Size</h4>
                    <p className="text-sm text-muted-foreground">
                      $500K - $5M per investment, with reserves for follow-on rounds.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Holding Period</h4>
                    <p className="text-sm text-muted-foreground">
                      7-10 years average, with flexibility for longer holds.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-yellow-50 to-yellow-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Target Returns</h4>
                    <p className="text-sm text-muted-foreground">
                      10x+ on successful investments, 3-5x portfolio average.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Public Market */}
          <TabsContent value="public" className="space-y-12">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Public Market Investments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strategic positions in high-growth public companies aligned with
                our investment themes and long-term value creation philosophy.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {publicMarketFocus.map((sector, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                >
                  <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <sector.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-semibold">
                            {sector.sector}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary">
                          {sector.allocation}% allocation
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">Portfolio Allocation</span>
                          <span className="text-sm">{sector.allocation}%</span>
                        </div>
                        <Progress value={sector.allocation} className="h-2" />
                      </div>

                      <div>
                        <p className="text-sm mb-2">Focus Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {sector.examples.map((example, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm">
                          <span className="text-primary">Investment Strategy:</span>{" "}
                          {sector.strategy}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Public Market Strategy</h3>
              <p className="text-muted-foreground mb-6">
                Our public market portfolio complements our private investments
                by providing liquidity and exposure to proven business models.
                We focus on long-term compounders with strong competitive moats
                and aligned management teams.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-indigo-50 to-indigo-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Investment Style</h4>
                    <p className="text-sm text-muted-foreground">
                      Concentrated positions in high-conviction ideas with
                      5-10-year horizons.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-rose-50 to-rose-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Risk Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Position sizing based on conviction, with stop losses on tactical trades.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-yellow-50 to-yellow-100">
                  <CardContent className="pt-6 py-8 min-h-[128px]">
                    <h4 className="mb-2 font-semibold">Portfolio Construction</h4>
                    <p className="text-sm text-muted-foreground">
                      15-25 core positions with 70% long-term holds, 30% tactical.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Investment Process */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Investment Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined investment process is designed to move quickly while
              conducting thorough due diligence.
            </p>
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {investmentProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUp}
                    className="relative flex items-start space-x-6"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl z-10">
                      {step.step}
                    </div>
                    <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400 flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-semibold">
                            {step.title}
                          </CardTitle>
                          <Badge variant="outline">
                            {step.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <Card className="bg-primary text-primary-foreground rounded-3xl shadow-lg border-none overflow-hidden">
            <CardContent className="text-center py-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Whether you're raising capital for your startup or have an
                exceptional investment opportunity, we'd love to learn more
                about your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Submit Your Pitch Deck
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Investment;
