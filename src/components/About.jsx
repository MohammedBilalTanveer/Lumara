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
  MapPinIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  TrendingUpIcon,
  UsersIcon,
  BuildingIcon,
  AwardIcon,
  BarChart3Icon,
  HeartIcon,
  GlobeIcon,
  TrophyIcon,
} from "lucide-react";

/* Animation variants (from portfolio.jsx) */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const About = () => {
  // Updated "crisp" experience data
  const experiences = [
    {
      period: "2019 - Present",
      role: "Founder and Partner",
      company: "Lumara Ventures", // Updated as requested
      location: "Bangalore, Karnataka",
      icon: BriefcaseIcon,
      sector: "Investment", // Added new field
    },
    {
      period: "2020 - Present",
      role: "Partner and CIO",
      company: "Family Office",
      location: "Bangalore, Karnataka",
      icon: BriefcaseIcon,
      sector: "Wealth Management", // Added new field
    },
    {
      period: "2015 - Present",
      role: "Strategy and Business Development",
      company: "VESCO",
      location: "Bangalore, Karnataka",
      icon: BriefcaseIcon,
      sector: "Mining", // Added new field
    },
  ];

  const boardExperience = {
    period: "2021 - Present",
    role: "Member of the Board",
    company: "SPS Bank",
    location: "Sandur, Karnataka",
    description: "Co-operative, not for profit bank",
    achievements: [
      "Designed and led micro-lending program supporting 350+ women entrepreneurs with over Rs. 5cr disbursed, achieving 99% re-payment",
      "Led digital transformation during pandemic, launching mobile banking and UPI, scaling to Rs. 15cr+ monthly transaction and tripling the number of customers",
    ],
  };

  const education = [
    {
      period: "2012 - 2013",
      degree: "Master's in Business, Finance",
      school: "Virginia Commonwealth University",
      location: "Richmond, VA",
      gpa: "3.9/4.0",
      honors: [
        "Dean Scholar for high academic standing",
        "Secured Scholarship for CFA exam: Level 1",
        "Beta Gamma Sigma Honor society",
      ],
      activities:
        "Reached the finals of business simulation competition at Association for Corporate Growth",
    },
    {
      period: "2008 - 2011",
      degree: "Bachelor's in Commerce, Finance",
      school: "St. Joseph's College of Commerce (Bangalore University)",
      location: "Bangalore, Karnataka",
      gpa: "5.5/6.0",
      activities:
        "President, Toastmaster's International – led 12 social educational events, grew membership by 20% (2010-2011)",
      thesis: "Behavior biases among male and female investors",
      internship: "Procurement and Supply chain, JSW Limited (2010)",
    },
  ];

  return (
    <div className="space-y-24 overflow-hidden">
      {/* Hero Section (Styled like portfolio.jsx) */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[40vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 p-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            About Lumora Ventures
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
Lumara Ventures partners with visionary founders, investing across private enterprises to public markets to drive sustainable growth and long-term value.          </p>
        </motion.div>
      </section>

      {/* Stats / Fund Overview Section REMOVED as per request */}

      {/* Nikhil's Profile */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative rounded-3xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src={Nikhil}
                alt="Nikhil K S - Founder of Lumora"
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-xl">
                <AwardIcon className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            transition={{ duration: 0.35 }}
          >
            <div>
              <h2 className="text-3xl mb-2">Nikhil K S</h2>
              <p className="text-xl text-primary mb-4">
                Founder & Managing Partner
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://www.linkedin.com/in/nikhil-k-s-b75302203/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-5 w-5 cursor-pointer hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nikhil K S founded Lumora with a singular mission: to build a
                family office that combines strategic capital deployment with
                deep operational expertise to create lasting value across
                generations.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise spanning venture capital, family office
                management, and operational leadership in mining and financial
                services, Nikhil brings a unique blend of investment acumen and
                hands-on business building experience. His portfolio includes
                notable successes like Anand Rathi Wealth (37.7x returns) and
                National Stock Exchange (10.5x returns).
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Professional Experience (Styled like portfolio.jsx tab content) */}
      <motion.section
        className="bg-muted/50"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 font-bold">
            Professional Experience
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* UPDATED to be crisp */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="p-5 rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <experience.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-semibold">
                          {experience.role}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary">{experience.period}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {experience.company} • {experience.location}
                    </CardDescription>
                    <div className="pt-2">
                      <Badge variant="outline">{experience.sector}</Badge>
                    </div>
                  </CardHeader>
                  {/* CardContent removed for crispness */}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Board Experience (Styled as a single portfolio card) */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl text-center mb-12 font-bold">
          Board Experience
        </h2>

        <motion.div
          className="max-w-4xl mx-auto"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BuildingIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {boardExperience.role}
                  </CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {boardExperience.period}
                </Badge>
              </div>
              <CardDescription className="text-base pt-2">
                {boardExperience.company} • {boardExperience.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {boardExperience.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  {boardExperience.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
      {/* Education (Styled like portfolio.jsx tab content) */}
      <motion.section
        className="bg-muted/50"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 font-bold flex items-center justify-center gap-3">
            <GraduationCapIcon className="h-8 w-8 text-primary" />
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400 h-full">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {edu.school} • {edu.location}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                        <Badge variant="secondary">{edu.period}</Badge>
                        <Badge variant="outline">GPA: {edu.gpa}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {edu.honors && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Honors & Recognition:
                        </h4>
                        <ul className="space-y-1">
                          {edu.honors.map((honor, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <TrophyIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{honor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.activities && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Activities:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.activities}
                        </p>
                      </div>
                    )}
                    {edu.thesis && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">
                          Thesis:
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.thesis}
                        </p>
                      </div>
                    )}

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Information (Styled like portfolio.jsx criteria section) */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl text-center mb-12 font-bold">Additional</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br from-rose-50 to-rose-100 transition-all duration-400">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <HeartIcon className="h-5 w-5 text-primary" />
                  Community Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Working with doctors, a regional hospital, and a healthcare
                  startup to design scalable models for emergency care delivery
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-400">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Kannada</span>
                    <Badge variant="secondary" className="text-xs">
                      Native
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hindi</span>
                    <Badge variant="secondary" className="text-xs">
                      Fluent
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Spanish</span>
                    <Badge variant="secondary" className="text-xs">
                      Beginner
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br from-green-50 to-green-100 transition-all duration-400">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <UsersIcon className="h-5 w-5 text-primary" />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  Avid tennis and poker enthusiast, pursuing both as lifelong
                  passions that reflect strategy and love for learning
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Investment Philosophy (Styled like portfolio.jsx criteria section) */}
      <motion.section
        className="bg-muted/50"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Investment Philosophy</h2>
            <blockquote className="text-2xl italic text-muted-foreground">
              "True wealth is measured not by what we accumulate, but by the
              positive impact we create in society and the lasting value we
              build across generations."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8 mt-12 items-stretch">
              {[
                {
                  principle: "Operational Value-Add",
                  description:
                    "Hands-on support in pricing, GTM strategy, hiring, and operational excellence to drive portfolio growth.",
                  gradient: "from-purple-50 to-purple-100",
                },
                {
                  principle: "Patient Capital",
                  description:
                    "Long-term partnership approach with focus on sustainable growth and 18%+ CAGR returns.",
                  gradient: "from-yellow-50 to-yellow-100",
                },
                {
                  principle: "Impact-Driven",
                  description:
                    "Combining financial returns with social impact through structured philanthropy and community development.",
                  gradient: "from-indigo-50 to-indigo-100",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br ${item.gradient} transition-all duration-400`}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{item.principle}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;