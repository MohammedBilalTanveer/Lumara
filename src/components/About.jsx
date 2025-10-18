// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Nikhil from "../public/Nikhil.png";
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  MapPinIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  UsersIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const About = () => {
  return (
    <div className="space-y-24 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[60vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            About Lumora
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            A family office dedicated to partnering with exceptional
            entrepreneurs and managing diversified investments across private
            and public markets — focused on creating value that lasts for
            generations.
          </p>
        </motion.div>
      </section>

      {/* PROFILE SECTION */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <div className="relative">
              <ImageWithFallback
                src={Nikhil}
                alt="Nikhil K S - Founder of Lumora"
                className="rounded-3xl w-full h-[560px] object-cover shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-xl">
                <AwardIcon className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-2">Nikhil K S</h2>
              <p className="text-xl text-muted-foreground mb-4">
                Founder & Managing Partner
              </p>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex space-x-3">
                  <LinkedinIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
                  <TwitterIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
                  <MailIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Nikhil founded Lumora to merge strategic capital deployment with
              hands-on operational support — partnering with founders to build
              category-defining companies. He brings 12+ years across venture,
              growth and product leadership.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <BriefcaseIcon className="h-8 w-8 mx-auto mb-2 text-white" />,
                  number: "12+",
                  label: "Years in VC",
                },
                {
                  icon: <UsersIcon className="h-8 w-8 mx-auto mb-2 text-white" />,
                  number: "50+",
                  label: "Companies Backed",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="transition-transform"
                >
                  <Card className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl shadow-lg border-none hover:shadow-primary/50 hover:shadow-xl transition-all duration-500">
                    <CardContent className="pt-6 text-center">
                      {stat.icon}
                      <div className="text-2xl font-semibold">{stat.number}</div>
                      <p className="text-sm opacity-90">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            Professional Journey
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                period: "2019 - Present",
                role: "Founder & Managing Partner",
                company: "Lumora Family Office",
                description:
                  "Managing capital across private and public markets with a focus on early-stage ventures, growth equity, and strategic public market positions.",
                achievements: [
                  "Built 25+ company portfolio across 3 sectors",
                  "Achieved 8 successful exits (avg. 12x return)",
                  "Established enterprise-level partnerships",
                ],
                color: "from-primary/10 to-primary/5",
              },
              {
                period: "2015 - 2019",
                role: "Principal",
                company: "Andreessen Horowitz",
                description:
                  "Led enterprise software investments and go-to-market strategy for portfolio companies.",
                achievements: [
                  "Led 8 Series A investments ($60M+ total)",
                  "Mentored 20+ startup founders",
                  "Built enterprise software vertical",
                ],
                color: "from-blue-50 to-blue-100",
              },
              {
                period: "2012 - 2015",
                role: "VP of Product",
                company: "DataSync Technologies (Acquired by Salesforce)",
                description:
                  "Scaled enterprise data integration platform from MVP to $10M ARR before acquisition.",
                achievements: [
                  "Expanded user base to 10,000+ enterprises",
                  "Led 25+ person product team",
                  "Negotiated $120M Salesforce acquisition",
                ],
                color: "from-green-50 to-green-100",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.03 }}
                className="transition-all"
              >
                <Card
                  className={`bg-gradient-to-br ${exp.color} rounded-3xl shadow-lg border-none hover:shadow-2xl hover:brightness-105 transition-all duration-500`}
                >
                  <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {exp.role}
                      </CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="px-3 py-1">
                      {exp.period}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2 mt-2">
                      {exp.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-sm text-muted-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + RECOGNITION */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <GraduationCapIcon className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "MBA, Strategy & Entrepreneurship",
                  subtitle: "Stanford Graduate School of Business • 2008–2010",
                  desc:
                    "Focused on venture capital, tech strategy, and entrepreneurship. Completed Stanford’s VC Directors’ College program.",
                  color: "from-blue-50 to-blue-100",
                },
                {
                  title: "B.S. Computer Science",
                  subtitle:
                    "Massachusetts Institute of Technology • 2004–2008",
                  desc:
                    "Magna Cum Laude. Specialized in distributed systems and ML. President of MIT Entrepreneurship Club.",
                  color: "from-purple-50 to-purple-100",
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="transition-transform"
                >
                  <Card
                    className={`bg-gradient-to-br ${edu.color} rounded-2xl shadow-md border-none hover:shadow-lg hover:brightness-105 transition-all duration-500`}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {edu.title}
                      </CardTitle>
                      <CardDescription>{edu.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{edu.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AwardIcon className="h-6 w-6 text-primary" />
              Recognition & Awards
            </h2>
            <div className="space-y-4">
              {[
                {
                  year: "2023",
                  award: "Forbes 30 Under 30 - Venture Capital",
                  desc: "Recognized for excellence in early-stage investing.",
                },
                {
                  year: "2022",
                  award: "TechCrunch Investor of the Year (Emerging)",
                  desc: "Outstanding portfolio performance & founder support.",
                },
                {
                  year: "2021",
                  award: "SV Business Journal 40 Under 40",
                  desc: "Honored as a rising leader in VC and tech.",
                },
              ].map((r, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04 }}
                  className="transition-transform"
                >
                  <Card className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl shadow-lg border-none hover:shadow-primary/50 hover:shadow-xl transition-all duration-500">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold">{r.award}</h4>
                          <p className="text-sm opacity-90 mt-1">{r.desc}</p>
                        </div>
                        <Badge className="bg-white text-primary font-semibold px-3 py-1 rounded-md">
                          {r.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT PHILOSOPHY */}
      <section className="bg-muted/40 py-24">
        <motion.div
          className="container mx-auto px-4 text-center space-y-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <h2 className="text-4xl font-bold">Investment Philosophy</h2>
          <blockquote className="text-2xl italic text-muted-foreground max-w-3xl mx-auto">
            "The best investments aren’t just in companies—they’re in people who
            dare to reimagine the world."
          </blockquote>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Founder-First",
                desc: "We invest in exceptional founders before markets or ideas.",
                color: "from-blue-50 to-blue-100",
              },
              {
                title: "Long-Term Partnership",
                desc: "We stay through every growth stage—patient and aligned.",
                color: "from-green-50 to-green-100",
              },
              {
                title: "Operational Excellence",
                desc: "Hands-on support in scaling, strategy, and execution.",
                color: "from-purple-50 to-purple-100",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="transition-transform"
              >
                <Card
                  className={`bg-gradient-to-br ${p.color} rounded-3xl border-none shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-500`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {p.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
