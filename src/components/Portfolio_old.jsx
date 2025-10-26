// src/components/Portfolio.jsx
import React, { useState, useRef, useEffect } from "react";
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
import {
  ExternalLinkIcon,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
} from "lucide-react";

/**
 * Full Portfolio component.
 * - Hero (matches About.jsx hero)
 * - Stats with CountUp (scroll triggered)
 * - Full portfolio companies grid (filterable)
 * - Exits section
 * - Investment Criteria
 * - Smooth entrance animations and polished hover (scale + shadow)
 */

/* Animation variant */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* portfolio data (full set you provided earlier) */
  const portfolioCompanies = [
    {
      name: "CloudSync Pro",
      description: "Enterprise cloud integration and data synchronization platform",
      sector: "Enterprise Software",
      stage: "Series A",
      investment: "$2.5M",
      valuation: "$45M",
      year: "2022",
      status: "Active",
      employees: "125+",
      website: "cloudsyncpro.com",
      logo:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "Grew ARR from $1M to $12M in 18 months",
        "Expanded to 200+ enterprise customers",
        "Launched AI-powered integration tools",
      ],
    },
    {
      name: "HealthLink",
      description:
        "Telemedicine platform connecting patients with specialized healthcare providers",
      sector: "HealthTech",
      stage: "Seed",
      investment: "$1.2M",
      valuation: "$8M",
      year: "2023",
      status: "Active",
      employees: "45+",
      website: "healthlink.io",
      logo:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "Served 50,000+ patients in first year",
        "Partnership with 3 major health systems",
        "FDA clearance for diagnostic tools",
      ],
    },
    {
      name: "PayFlow",
      description:
        "Next-generation payment processing with embedded financial services",
      sector: "Fintech",
      stage: "Series A",
      investment: "$3.1M",
      valuation: "$55M",
      year: "2021",
      status: "Active",
      employees: "180+",
      website: "payflow.com",
      logo:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "Processing $100M+ monthly volume",
        "Integrated with 50+ e-commerce platforms",
        "Launched embedded lending product",
      ],
    },
    {
      name: "DevTools Pro",
      description:
        "Developer productivity platform with AI-powered code analysis",
      sector: "Enterprise Software",
      stage: "Seed",
      investment: "$1.8M",
      valuation: "$15M",
      year: "2023",
      status: "Active",
      employees: "32+",
      website: "devtools.pro",
      logo:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "10,000+ developers using platform",
        "Reduced code review time by 60%",
        "GitHub integration with 1M+ repos",
      ],
    },
    {
      name: "GreenEnergy Analytics",
      description:
        "IoT and data analytics platform for renewable energy optimization",
      sector: "CleanTech",
      stage: "Series A",
      investment: "$2.8M",
      valuation: "$38M",
      year: "2022",
      status: "Active",
      employees: "95+",
      website: "greenergyanalytics.com",
      logo:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "Monitoring 500+ renewable installations",
        "Improved energy efficiency by 25%",
        "Expanded to 12 countries",
      ],
    },
    {
      name: "DataVault",
      description:
        "Enterprise data security and compliance management platform",
      sector: "Enterprise Software",
      stage: "Series B",
      investment: "$5.2M",
      valuation: "$120M",
      year: "2020",
      status: "Exited",
      employees: "250+",
      website: "datavault.com",
      logo:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      highlights: [
        "Acquired by Microsoft for $240M",
        "Protected data for Fortune 500 companies",
        "15x return on investment",
      ],
    },
  ];

  const exits = [
    {
      name: "DataVault",
      exitType: "Acquisition",
      acquirer: "Microsoft",
      exitValue: "$240M",
      multiple: "15x",
      year: "2023",
    },
    {
      name: "ShopBot AI",
      exitType: "Acquisition",
      acquirer: "Shopify",
      exitValue: "$85M",
      multiple: "12x",
      year: "2023",
    },
    {
      name: "LogicFlow",
      exitType: "IPO",
      acquirer: "NASDAQ: LGCF",
      exitValue: "$180M",
      multiple: "18x",
      year: "2022",
    },
  ];

  const categories = [
    { id: "all", label: "All Companies" },
    { id: "Enterprise Software", label: "Enterprise Software" },
    { id: "Fintech", label: "Fintech" },
    { id: "HealthTech", label: "HealthTech" },
    { id: "CleanTech", label: "CleanTech" },
  ];

  const filteredCompanies =
    selectedCategory === "all"
      ? portfolioCompanies
      : portfolioCompanies.filter((c) => c.sector === selectedCategory);

  /* Stats CountUp trigger (IntersectionObserver) */
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
      {/* HERO — styled to match About.jsx hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[60vh] flex items-center justify-center text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Partnering with visionary founders to build transformative companies across technology, finance, and sustainability — creating lasting value across generations.
          </p>
        </motion.div>
      </section>

      {/* STATS */}
      <motion.section ref={statsRef} className="container mx-auto px-4 -mt-12" initial="hidden" whileInView="show" variants={fadeUp} viewport={{ once: true }}>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Portfolio Companies", end: 25, suffix: "+" },
            { label: "Total Portfolio Value", end: 2.1, suffix: "B" },
            { label: "Successful Exits", end: 8, suffix: "" },
            { label: "Average Return", end: 14, suffix: "x" },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.35 }}>
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl shadow-lg border-none hover:shadow-primary/40 transition-all duration-400">
                <CardContent className="pt-8 pb-10 text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {statsInView ? (
                      <CountUp end={stat.end} duration={2} suffix={stat.suffix || ""} decimals={stat.end % 1 !== 0 ? 1 : 0} />
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

      {/* PORTFOLIO — Tabs, Filters, Companies */}
      <section className="container mx-auto px-4">
        <Tabs defaultValue="active" className="space-y-10">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="active">Active Portfolio</TabsTrigger>
            <TabsTrigger value="exits">Exits</TabsTrigger>
          </TabsList>

          {/* Active */}
          <TabsContent value="active" className="space-y-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((c) => (
                <Button
                  key={c.id}
                  variant={selectedCategory === c.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(c.id)}
                >
                  {c.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompanies
                .filter((c) => c.status === "Active")
                .map((company, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ duration: 0.35 }}>
                    <Card className="rounded-3xl shadow-lg border-none bg-gradient-to-br from-white/5 to-background backdrop-blur hover:shadow-2xl transition-all duration-400">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                              <ImageWithFallback src={company.logo} alt={`${company.name} logo`} className="w-8 h-8 rounded" />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-semibold">{company.name}</CardTitle>
                              <CardDescription className="text-sm text-muted-foreground">{company.description}</CardDescription>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{company.stage}</Badge>
                            <ExternalLinkIcon className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Sector</span>
                          <Badge variant="secondary">{company.sector}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Investment</p>
                              <p className="font-medium">{company.investment}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Team Size</p>
                              <p className="font-medium">{company.employees}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Key Highlights</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {company.highlights.map((h, i2) => (
                              <li key={i2} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          {/* Exits */}
          <TabsContent value="exits" className="space-y-8">
            <div className="text-center space-y-4 mb-4">
              <h2 className="text-2xl font-bold">Successful Exits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Companies that have achieved successful exits through acquisitions or IPOs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exits.map((exit, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.35 }}>
                  <Card className="rounded-3xl border-none shadow-md hover:shadow-lg transition-all duration-400 bg-gradient-to-br from-green-50 to-green-100">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">{exit.name}</CardTitle>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">{exit.exitType}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                        <div>
                          <p className="text-muted-foreground">Exit Value</p>
                          <p className="text-lg font-semibold">{exit.exitValue}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Multiple</p>
                          <p className="text-lg text-green-600 font-semibold">{exit.multiple}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">Acquirer / Exchange</p>
                      <p className="mb-3">{exit.acquirer}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exit.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* INVESTMENT CRITERIA / FOCUS */}
  <section className="bg-muted/50 py-20">
        <motion.div
          className="container mx-auto px-4 text-center space-y-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold">Investment Criteria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We look for founders and ideas that can scale — with differentiated
            technology, strong go-to-market signals, and timing that matters.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 items-stretch">
            {[
              {
                title: "Exceptional Founders",
                desc: "Visionary leaders with deep domain expertise and proven execution ability.",
                icon: <Users className="h-6 w-6 text-primary" />,
                gradient: "from-blue-50 to-blue-100",
              },
              {
                title: "Large Market Opportunity",
                desc: "Addressing markets with $1B+ potential and a clear path to leadership.",
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                gradient: "from-green-50 to-green-100",
              },
              {
                title: "Differentiated Technology",
                desc: "Proprietary tech or unique approach creating sustainable advantage.",
                 icon: <span className="text-2xl">🚀</span>,
                gradient: "from-purple-50 to-purple-100",
              },
              {
                title: "Product-Market Fit",
                desc: "Strong early traction and validated product-market fit signals.",
                icon: <span className="text-2xl">🎯</span>,
                gradient: "from-rose-50 to-rose-100",
              },
              {
                title: "Scalable Business Model",
                desc: "Clear path to profitable growth with strong unit economics.",
                icon: <span className="text-2xl">📈</span>,
                gradient: "from-yellow-50 to-yellow-100",
              },
              {
                title: "Strategic Timing",
                desc: "Market timing aligned with emerging technology and user trends.",
                icon: <span className="text-2xl">⏰</span>,
                gradient: "from-indigo-50 to-indigo-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
              >
                <Card className={`h-full flex flex-col justify-between rounded-3xl border-none shadow-md hover:shadow-xl bg-gradient-to-br ${item.gradient} transition-all duration-400`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 justify-center">
                      {item.icon}
                      <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>{item.desc}</p>
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

export default Portfolio;