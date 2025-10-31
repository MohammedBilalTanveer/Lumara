// src/components/VentureStudio.jsx
import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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

/* Optimized Animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const VentureStudio = ({ onPageChange }) => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const modelRef = useRef(null);
  const modelInView = useInView(modelRef, { once: true, margin: "-100px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const advantagesRef = useRef(null);
  const advantagesInView = useInView(advantagesRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.1,
      },
    },
  };

  const optimizedFadeUp = {
    ...fadeUp,
    show: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.2 } }
      : fadeUp.show,
  };

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
      launch: "2026",
      focus: "Fintech & AI",
    },
    {
      name: "Indulge",
      description: "Personal Premium Concierge - At One's Fingertips",
      stage: "Series A",
      status: "Market Testing",
      team: "3 co-founders",
      launch: "2022",
      focus: "Luxury Services",
    },
    {
      name: "Das Steigen",
      description: "EV and OEM manufacturing ecosystem in India",
      stage: "Early Stage",
      status: "Market Testing",
      team: "2 co-founders",
      launch: "2024",
      focus: "EV manufacturing",
    },
    {
      name: "Tradomate",
      description: "AI-Powered Trading Platform for Smarter Trades",
      stage: "Pre-Series A",
      status: "Market Testing",
      team: "2 co-founders",
      launch: "2024",
      focus: "Fintech & AI",
    },
  ];

  return (
    <div className="space-y-24 overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[40vh] flex items-center justify-center text-center">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "show" : "hidden"}
          variants={optimizedFadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Venture Studio
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed px-2">
            Building ventures from the ground up — combining capital,
            operational expertise, and network to de-risk early-stage startups.
          </p>
        </motion.div>
      </section>

      {/* ACTIVE PROJECTS */}
      <motion.section
        ref={projectsRef}
        className="container mx-auto px-4 min-h-[40vh]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center space-y-4 mb-12" variants={optimizedFadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold">Active Studio Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each startup is nurtured from ideation to scale within our studio
            ecosystem.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {ventureStudioProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={optimizedFadeUp}
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                    <Badge variant="outline" className="w-fit">{project.stage}</Badge>
                    <RocketIcon className="h-5 w-5 text-primary self-start sm:self-center" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-semibold">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                 

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Status</p>
                      <p>{project.status}</p>
                    </div>
                   
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between pt-3 border-t border-border/50 gap-2">
                    <Badge variant="secondary" className="text-xs w-fit">
                      {project.focus}
                    </Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground text-right sm:text-left">
                      Launch: {project.launch}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* STUDIO MODEL */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <motion.div
          ref={modelRef}
          className="container mx-auto px-4 space-y-8 sm:space-y-10 min-h-[50vh]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={optimizedFadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Venture Studio Model</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10">
              Our model blends capital, operational expertise, and shared
              resources to transform ideas into successful ventures.
            </p>
          </motion.div>

          {/* Model Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
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
                variants={optimizedFadeUp}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col"
              >
                <Card className="rounded-3xl border-none bg-gradient-to-br from-white/10 to-background shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <CardHeader className="flex-1">
                    <CardTitle className="flex items-center gap-2 justify-center text-center text-sm sm:text-base">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm text-muted-foreground text-center flex-grow flex items-center justify-center pb-4">
                    {item.desc}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* INVESTMENT PROCESS */}
      <section
        ref={processRef}
        className="bg-muted/50 py-20 sm:py-24 min-h-[60vh]"
      >
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center space-y-4 mb-12" variants={optimizedFadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold">Investment Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Our streamlined investment process is designed to move quickly while
              conducting thorough due diligence.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto relative"
            variants={optimizedFadeUp}
          >
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {investmentProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={optimizedFadeUp}
                  className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg sm:text-xl z-10 ml-2 sm:ml-0">
                    {step.step}
                  </div>
                  <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-300 flex-1 w-full">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl font-semibold">
                          {step.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          {step.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ENHANCED STUDIO ADVANTAGES */}
      <section
        ref={advantagesRef}
        className="bg-muted/50 min-h-[50vh]"
      >
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div variants={optimizedFadeUp}>
            <Card className="rounded-3xl bg-gradient-to-br from-primary/10 via-background/60 to-primary/5 border-none mt-8 sm:mt-16">
              <CardContent className="pt-8 sm:pt-14 pb-12 sm:pb-16 text-center space-y-8 sm:space-y-12">
                <div className="flex flex-col items-center gap-3 sm:gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <ShieldIcon className="h-6 sm:h-7 w-6 sm:w-7 text-primary" />
                    <h4 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      Studio Advantages
                    </h4>
                  </div>
                  <div className="w-16 sm:w-20 h-[2px] sm:h-[3px] bg-primary/70 rounded-full"></div>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center max-w-6xl mx-auto"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
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
                      variants={optimizedFadeUp}
                      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 sm:p-8 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-200 border-2 shadow-inner w-full"
                    >
                      <p className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">
                        {adv.title}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {adv.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default VentureStudio;