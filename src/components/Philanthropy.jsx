// File: Philanthropy.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  HeartIcon,
  GraduationCapIcon,
  UsersIcon,
  BookOpenIcon,
  BuildingIcon,
  ActivityIcon,
  TrendingUpIcon,
  HandHeartIcon,
  TrophyIcon,
} from "lucide-react";

/* Animation variants (from About.jsx) */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* --- CountUp Component --- */
const CountUp = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Extract numeric part and suffix (before animation)
  const numeric = parseFloat(target.replace(/[^0-9.]/g, "")) || 0;
  const prefix = target.includes("₹") ? "₹" : "";
  const suffix = target.replace(/[0-9₹.,]/g, "");

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const value = Math.floor(progress * numeric);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, numeric, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Philanthropy = () => {


  const educationPrograms = [
    {
      title: "College Scholarship Program",
      description:
        "Merit-based scholarships covering full tuition, books, and living expenses for deserving students from underprivileged backgrounds.",
      impact: "50+ students supported annually",
      icon: GraduationCapIcon,
      stats: [
        "100% tuition coverage",
        "4-year commitment per scholar",
      ],
    },
    {
      title: "Government School Infrastructure",
      description:
        "Building and upgrading school infrastructure including classrooms, laboratories, computer labs, and sports facilities.",
      impact: "10+ schools transformed",
      icon: BuildingIcon,
      stats: [
        "Modern classrooms & labs",
        "Digital learning tools",
        "Sports & recreation facilities",
      ],
    },
    {
      title: "Library Development Program",
      description:
        "Establishing and maintaining well-stocked libraries with books, digital resources, and reading programs to foster learning.",
      impact: "10,000+ books distributed",
      icon: BookOpenIcon,
      stats: [
        "Physical & digital libraries",
        "Reading programs & competitions",
        "Teacher training workshops",
      ],
    },
  ];

  const healthcarePrograms = [
    {
      title: "Annual Health Camps",
      description:
        "Free comprehensive health screening camps conducted quarterly in underserved communities with specialist doctors.",
      impact: "4 camps annually, 1,000+ patients each",
      icon: ActivityIcon,
      stats: [
        "General health screening",
        "Specialist consultations",
        "Free medicines & referrals",
      ],
    },
    {
      title: "Preventive Healthcare Awareness",
      description:
        "Community health awareness programs focusing on nutrition, hygiene, maternal health, and disease prevention.",
      impact: "2,000+ families reached",
      icon: HeartIcon,
      stats: [
        "Health education workshops",
        "Nutrition counseling",
        "Disease prevention programs",
      ],
    },
    {
      title: "Medical Equipment Donation",
      description:
        "Supporting government hospitals and primary health centers with essential medical equipment and diagnostic tools.",
      impact: "5+ healthcare facilities equipped",
      icon: HandHeartIcon,
      stats: [
        "Diagnostic equipment",
        "Emergency care tools",
        "Patient monitoring devices",
      ],
    },
  ];

  const focusAreas = [
    {
      title: "Education",
      description:
        "Empowering the next generation through quality education, infrastructure, and scholarships.",
      icon: GraduationCapIcon,
      programs: educationPrograms.length,
      beneficiaries: "3,000+",
    },
    {
      title: "Healthcare",
      description:
        "Improving community health through free medical camps, awareness programs, and infrastructure support.",
      icon: HeartIcon,
      programs: healthcarePrograms.length,
      beneficiaries: "3,000+",
    },
  ];
 const impactStats = [
    {
      icon: UsersIcon,
      value: "6,000+",
      label: "Individuals Impacted Annually",
      description:
        "Lives touched through our education and healthcare initiatives",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      icon: GraduationCapIcon,
      value: "50+",
      label: "College Scholarships",
      description:
        "Supporting students to achieve their educational dreams",
      gradient: "from-purple-50 to-purple-100",
    },
    {
      icon: ActivityIcon,
      value: "4,000+",
      label: "Health Screenings",
      description:
        "Annual health camp screenings across communities",
      gradient: "from-rose-50 to-rose-100",
    },
  ];
  const philosophyPrinciples = [
    {
      principle: "Sustainable",
      description:
        "Long-term programs that create lasting impact beyond one-time interventions.",
      gradient: "from-purple-50 to-purple-100",
    },
    {
      principle: "Measurable",
      description:
        "Data-driven approach with clear metrics to track and improve our impact.",
      gradient: "from-yellow-50 to-yellow-100",
    },
    {
      principle: "Scalable",
      description:
        "Building models that can be replicated and expanded to reach more communities.",
      gradient: "from-indigo-50 to-indigo-100",
    },
  ];

  return (
    <div className="space-y-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[40vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Philanthropy
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            We believe true wealth is measured by the positive impact we create
            in society. Through our family foundation, we are deeply committed
            to education and healthcare, impacting over 6,000 individuals
            annually.
          </p>
        </motion.div>
      </section>
     <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl text-center mb-12 font-bold">
          Our Impact by the Numbers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br ${stat.gradient} transition-all duration-400`}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-2">
                    <CountUp target={stat.value} />
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Focus Areas */}
      <motion.section
        className="bg-muted/50"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 font-bold">
            Our Focus Areas
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 -mt-8">
            We concentrate our philanthropic efforts on two critical pillars
            that create lasting change in communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <Card className="h-full rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-semibold">
                        {area.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">
                      {area.description}
                    </CardDescription>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Active Programs
                        </p>
                        <p className="text-2xl font-semibold">
                          {area.programs}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Beneficiaries
                        </p>
                        <p className="text-2xl font-semibold">
                          {area.beneficiaries}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Programs */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl text-center mb-12 font-bold flex items-center justify-center gap-3">
          <GraduationCapIcon className="h-8 w-8 text-primary" />
          Education Initiatives
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 -mt-8">
          Empowering students and transforming schools to build a brighter
          future.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {educationPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-400">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col space-y-4">
                  <p className="text-muted-foreground flex-grow">
                    {program.description}
                  </p>
                  <div className="bg-white/50 rounded-lg p-3">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">
                        Impact:
                      </span>{" "}
                      {program.impact}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {program.stats.map((stat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <TrophyIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Healthcare Programs */}
      <motion.section
        className="bg-muted/50"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 font-bold flex items-center justify-center gap-3">
            <HeartIcon className="h-8 w-8 text-primary" />
            Healthcare Initiatives
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 -mt-8">
            Improving community health through accessible care, awareness, and
            infrastructure support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {healthcarePrograms.map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br from-rose-50 to-rose-100 transition-all duration-400">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col space-y-4">
                    <p className="text-muted-foreground flex-grow">
                      {program.description}
                    </p>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm">
                        <span className="font-semibold text-primary">
                          Impact:
                        </span>{" "}
                        {program.impact}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {program.stats.map((stat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <TrophyIcon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{stat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Philanthropic Philosophy */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Our Philanthropic Philosophy
          </h2>
          <blockquote className="text-2xl italic text-muted-foreground">
            "We believe that true wealth is measured not by what we
            accumulate, but by the positive impact we create in society."
          </blockquote>
          <div className="grid md:grid-cols-3 gap-8 mt-12 items-stretch">
            {philosophyPrinciples.map((item, index) => (
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
                    <CardTitle className="text-lg">
                      {item.principle}
                    </CardTitle>
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
      </motion.section>
    </div>
  );
};

export default Philanthropy;