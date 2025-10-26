// src/components/VentureStudio.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  RocketIcon,
  UsersIcon,
  LightbulbIcon,
  TrendingUpIcon,
  ShieldIcon,
} from "lucide-react";

/* Animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const VentureStudio = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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

  const ventureStudioProjects = [
    {
      name: "Alpha.ai",
      description: "AI-powered family office management platform",
      stage: "In Development",
      status: "Building MVP",
      team: "2 co-founders",
      launch: "Q2 2026",
      focus: "Fintech & AI",
      progress: 65,
    },
    {
      name: "Indulge",
      description: "Personal Premium Concierge - At One's Fingertips",
      stage: "Series A",
      status: "Market Testing",
      team: "3 co-founders",
      launch: "Q4 2024",
      focus: "Luxury Services",
      progress: 75,
    },
    {
      name: "Das Steigen",
      description: "EV and OEM manufacturing ecosystem in India",
      stage: "Early Stage",
      status: "Market Testing",
      team: "2 co-founders",
      launch: "2024",
      focus: "EV manufacturing",
      progress: 45,
    },
    {
      name: "Tradomate",
      description: "AI-Powered Trading Platform for Smarter Trades",
      stage: "Pre-Series A",
      status: "Market Testing",
      team: "2 co-founders",
      launch: "2024",
      focus: "Fintech & AI",
      progress: 15,
    },
  ];

  return (
    <div className="space-y-24 overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[60vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Venture Studio
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Building ventures from the ground up — combining capital,
            operational expertise, and network to de-risk early-stage startups.
          </p>
        </motion.div>
      </section>

      {/* ACTIVE PROJECTS */}
      <motion.section
        ref={ref}
        className="container mx-auto px-4"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
      >
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Active Studio Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each startup is nurtured from ideation to scale within our studio
            ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventureStudioProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{project.stage}</Badge>
                    <RocketIcon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">
                        Progress
                      </span>
                      <span className="text-sm">{project.progress}%</span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-2 rounded-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Status</p>
                      <p>{project.status}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Team</p>
                      <p>{project.team}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <Badge variant="secondary" className="text-xs">
                      {project.focus}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Launch: {project.launch}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* STUDIO MODEL */}
      <section className="bg-muted/50 py-20">
        <motion.div
          className="container mx-auto px-4 space-y-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Venture Studio Model
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10">
            Our model blends capital, operational expertise, and shared
            resources to transform ideas into successful ventures.
          </p>

          {/* Consistent card sizing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ideation & Validation",
                icon: <LightbulbIcon className="h-5 w-5 text-primary" />,
                desc: "Research, validate, and test high-impact ideas.",
              },
              {
                title: "Team Formation",
                icon: <UsersIcon className="h-5 w-5 text-primary" />,
                desc: "Recruit exceptional teams aligned with our mission.",
              },
              {
                title: "Product Development",
                icon: <RocketIcon className="h-5 w-5 text-primary" />,
                desc: "Build MVPs and iterate fast towards product-market fit.",
              },
              {
                title: "Growth & Scale",
                icon: <TrendingUpIcon className="h-5 w-5 text-primary" />,
                desc: "Scale operations, secure funding, and expand reach.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="rounded-3xl border-none bg-gradient-to-br from-white/10 to-background shadow-md hover:shadow-xl transition-all duration-400 h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 justify-center text-center">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground text-center flex-grow flex items-center justify-center">
                    {item.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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

          {/* ENHANCED STUDIO ADVANTAGES */}
          <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-background/60 to-primary/5 border-none mt-16">
            <CardContent className="pt-14 pb-16 text-center space-y-12">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2">
                  <ShieldIcon className="h-7 w-7 text-primary" />
                  <h4 className="text-3xl font-bold tracking-tight">
                    Studio Advantages
                  </h4>
                </div>
                <div className="w-20 h-[3px] bg-primary/70 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
                {[
                  {
                    title: "Higher Success Rate",
                    desc: "De-risked through rigorous validation and experienced execution teams.",
                  },
                  {
                    title: "Greater Ownership",
                    desc: "Studios retain significant equity, ensuring full alignment of incentives.",
                  },
                  {
                    title: "Portfolio Synergies",
                    desc: "Shared tech, resources, and strategic network across ventures.",
                  },
                ].map((adv, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.35 }}
                    className="p-8 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 border-2 shadow-inner"
                  >
                    <p className="text-xl font-semibold text-primary mb-3">
                      {adv.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {adv.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default VentureStudio;
