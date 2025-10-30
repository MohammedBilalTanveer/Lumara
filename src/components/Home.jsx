import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Target, TrendingUp, Users, Award, X } from "lucide-react";
import PitchModal from "./PitchModal"; // ← New import for the extracted modal

export const Home = ({ onPageChange }) => {
  const [showPitchModal, setShowPitchModal] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.98, willChange: "transform" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  const stats = [
    { icon: Target, value: 50, suffix: "M+", label: "Assets Under Management" },
    { icon: TrendingUp, value: 10, suffix: "+", label: "Portfolio Companies" },
    { icon: Users, value: 100, suffix: "+", label: "Jobs Created" },
    { icon: Award, value: 4, suffix: "", label: "Successful Exits" },
  ];

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="space-y-28 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Badge
                variant="secondary"
                className="w-fit bg-accent text-accent-foreground px-3 py-1 rounded-md"
              >
                Backed by Innovation
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                Where bright ideas
                <motion.span
                  className="block text-accent-foreground bg-accent px-4 py-2 rounded-lg mt-3 inline-block shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                >
                  find their light
                </motion.span>
              </h1>

              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Lumara Ventures is a family office partnering with exceptional
                entrepreneurs and managing diversified investments across
                private and public markets.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group hover:scale-105 transition-all"
                  onClick={() => onPageChange("portfolio")}
                >
                  Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all"
                  onClick={() => onPageChange("investment")}
                >
                  Investment Thesis
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603621408626-dc1fb97dbbc2"
                alt="Modern venture capital office"
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="container mx-auto px-4">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="text-center rounded-3xl shadow-lg hover:shadow-primary/50 transition-all bg-gradient-to-br from-primary to-primary/80 border-none text-white">
                <CardContent className="pt-8">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-white" />
                  <div className="text-5xl font-bold mb-2 text-white">
                    {statsInView ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                  </div>
                  <p className="text-white/90 text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1704440263700-e63c995b5dba"
              alt="Startup technology workspace"
              className="rounded-3xl w-full h-[450px] object-cover shadow-xl hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold">Why Lumara Ventures?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lumara Ventures is a family-backed hybrid investment fund that invests
              across venture capital and growth equity. Our mission is to back
              the builders of tomorrow’s India — founders, operators, and teams
              creating the enabling infrastructure for a modern, formalized, and
              digital economy.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Visionary Leadership",
                  text: "Led by Nikhil K S, bringing deep operational experience and strategic insights.",
                },
                {
                  title: "Hands-On Partnership",
                  text: "We don't just write checks — we roll up our sleeves and work alongside founders.",
                },
                {
                  title: "Network Effect",
                  text: "Access to our extensive network of entrepreneurs, operators, and industry experts.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT FOCUS SECTION */}
      <section className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Investment Focus
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We invest in early-stage companies reimagining industries through
            technology and innovation.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {[
            {
              title: "Enterprise Software",
              description:
                "B2B SaaS solutions that streamline operations and drive efficiency.",
              gradient: "from-blue-500/10 to-blue-500/5 border-blue-200",
            },
            {
              title: "Fintech",
              description:
                "Financial services and payment technologies reshaping commerce.",
              gradient: "from-green-500/10 to-green-500/5 border-green-200",
            },
            {
              title: "EV Tech",
              description:
                "Innovations in EV manufacturing, batteries, and mobility tech.",
              gradient: "from-purple-500/10 to-purple-500/5 border-purple-200",
            },
            {
              title: "Logistics",
              description:
                "Smart supply chain and logistics solutions optimizing transportation, warehousing, and last-mile delivery.",
              gradient: "from-red-500/10 to-red-500/5 border-red-200",
            },
          ].map((focus, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card
                className={`min-h-[200px] hover:scale-[1.03] transition-transform rounded-3xl shadow-md bg-gradient-to-br ${focus.gradient} border`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-2">
                    {focus.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground pb-3">
                    {focus.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

   {/* PORTFOLIO HIGHLIGHTS SECTION */}
<section className="bg-muted/50 py-24">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center space-y-4 mb-14"
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
        Portfolio Highlights
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        Recent investments making waves in their industries.
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {[
        {
          name: "NSE",
          description: "India’s leading stock exchange and financial ecosystem",
          stage: "Established",
          sector: "Capital Markets",
          color: "from-blue-400/10 to-blue-600/10 border-blue-300",
        },
        {
          name: "Anand Rathi",
          description: "Wealth management and financial advisory powerhouse",
          stage: "Growth",
          sector: "Financial Services",
          color: "from-green-400/10 to-green-600/10 border-green-300",
        },
        {
          name: "Tradomate",
          description: "AI-powered trading platform for smarter trades",
          stage: "Pre-Series A",
          sector: "Fintech",
          color: "from-amber-400/10 to-amber-600/10 border-amber-300",
        },
        {
          name: "Indulge",
          description:
            "Premium lifestyle concierge and experience platform",
          stage: "Series A",
          sector: "Luxury Services",
          color: "from-pink-400/10 to-pink-600/10 border-pink-300",
        },
        {
          name: "Das Steign",
          description:
            "EV and OEM manufacturing ecosystem in India",
          stage: "Early Stage",
          sector: "EV Manufacturing",
          color: "from-purple-400/10 to-purple-600/10 border-purple-300",
        },
      ].map((company, i) => (
        <motion.div key={i} variants={fadeUp}>
          <Card
            className={`hover:shadow-2xl transition-all bg-gradient-to-br ${company.color} rounded-3xl border h-full flex flex-col justify-between`}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl font-bold">
                  {company.name}
                </CardTitle>
                <Badge variant="outline" className="text-sm">
                  {company.stage}
                </Badge>
              </div>
              <CardDescription className="text-base sm:text-lg mt-2 leading-relaxed">
                {company.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-auto">
              <Badge
                variant="secondary"
                className="mt-4 px-3 py-1 text-sm sm:text-base"
              >
                {company.sector}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* CTA SECTION */}
      <motion.section
        className="container mx-auto px-4 pt-12 pb-12 mb-10"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
      >
        <Card className="bg-primary text-primary-foreground rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="text-center py-20 space-y-6">
            <h2 className="text-4xl font-bold">Ready to Build the Future?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              If you're a founder with a bold vision and the drive to make it
              reality, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 hover:scale-105 transition-transform"
                onClick={() => setShowPitchModal(true)}
              >
                Submit Your Pitch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-transform"
                onClick={() => {
                  onPageChange("contact");
                  setTimeout(() => {
                    const section = document.getElementById("contact");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 300);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Extracted Pitch Modal ← Now a separate component */}
      <PitchModal isOpen={showPitchModal} onClose={() => setShowPitchModal(false)} />
    </div>
  );
};