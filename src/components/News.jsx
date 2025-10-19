// src/components/News.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "lucide-react";

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardHover = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.25, ease: "easeOut" },
};

export const News = () => {
  const featuredInsights = [
    {
      title: "The Future of Enterprise AI: Beyond the Hype",
      excerpt:
        "As AI becomes ubiquitous in enterprise software, we examine which applications will create lasting value and which are merely following trends.",
      category: "AI & Technology",
      author: "Nikhil K S",
      date: "2024-01-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&q=80",
      featured: true,
    },
    {
      title: "Fintech in 2024: The Infrastructure Play",
      excerpt:
        "Why the next wave of fintech innovation will be built on infrastructure rather than consumer-facing applications.",
      category: "Fintech",
      author: "Nikhil K S",
      date: "2024-01-08",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1080&q=80",
      featured: true,
    },
  ];

  const recentInsights = [
    {
      title:
        "Why We Invested in CloudSync Pro: The Data Integration Revolution",
      excerpt:
        "Our investment thesis on the future of enterprise data integration and why CloudSync Pro is positioned to lead.",
      category: "Portfolio Insights",
      author: "Lumora Team",
      date: "2023-12-20",
      readTime: "5 min read",
      type: "Investment",
    },
    {
      title: "The Health Tech Opportunity: Digital-First Healthcare",
      excerpt:
        "Exploring the $4 trillion healthcare market and the role of technology in improving patient outcomes.",
      category: "Healthcare",
      author: "Nikhil K S",
      date: "2023-12-15",
      readTime: "7 min read",
      type: "Thought Leadership",
    },
    {
      title: "Building in Public: Lessons from Our Portfolio Companies",
      excerpt:
        "How transparency and community building are becoming competitive advantages for B2B startups.",
      category: "Startup Insights",
      author: "Lumora Team",
      date: "2023-12-10",
      readTime: "4 min read",
      type: "Insights",
    },
    {
      title: "The Climate Tech Investment Landscape in 2024",
      excerpt:
        "Analyzing the opportunities and challenges in climate technology investments for the year ahead.",
      category: "Climate Tech",
      author: "Nikhil K S",
      date: "2023-12-05",
      readTime: "9 min read",
      type: "Market Analysis",
    },
    {
      title: "Founder Mental Health: The Hidden Challenge of Scaling",
      excerpt:
        "Addressing the psychological challenges founders face during rapid growth phases and how VCs can help.",
      category: "Founder Support",
      author: "Nikhil K S",
      date: "2023-11-28",
      readTime: "6 min read",
      type: "Thought Leadership",
    },
    {
      title: "Series A Fundraising in a Challenging Market",
      excerpt:
        "Practical advice for founders navigating Series A fundraising in the current economic environment.",
      category: "Fundraising",
      author: "Lumora Team",
      date: "2023-11-20",
      readTime: "8 min read",
      type: "Founder Resources",
    },
  ];

  const pressReleases = [
    {
      title:
        "Lumora Expands Investment Strategy with New Focus on Venture Studio",
      date: "2024-01-10",
      excerpt:
        "Family office announces new venture studio initiative to build and incubate high-potential startups from the ground up.",
    },
    {
      title: "Portfolio Company PayFlow Raises $15M Series A Led by Tier-1 VCs",
      date: "2023-12-18",
      excerpt:
        "Payment processing startup PayFlow secures funding to accelerate product development and market expansion.",
    },
    {
      title: "Lumora Portfolio Company DataVault Acquired by Microsoft for $240M",
      date: "2023-11-15",
      excerpt:
        "Successful exit demonstrates strong returns and validates our enterprise software investment thesis.",
    },
  ];

  const resources = [
    {
      title: "Startup Playbook",
      description:
        "Comprehensive guide to building and scaling a startup from idea to Series A",
      type: "Guide",
      downloadable: true,
    },
    {
      title: "Pitch Deck Template",
      description:
        "Our battle-tested pitch deck template used by successful portfolio companies",
      type: "Template",
      downloadable: true,
    },
    {
      title: "Financial Model Template",
      description:
        "Investor-ready financial model template for SaaS and marketplace businesses",
      type: "Spreadsheet",
      downloadable: true,
    },
    {
      title: "Due Diligence Checklist",
      description:
        "Complete checklist to prepare your startup for investor due diligence",
      type: "Checklist",
      downloadable: true,
    },
    {
      title: "Founder Mental Health Guide",
      description:
        "Resources and strategies for maintaining mental health during the startup journey",
      type: "Guide",
      downloadable: true,
    },
    {
      title: "Portfolio Company Network",
      description:
        "Access to our portfolio company founder network and peer learning opportunities",
      type: "Network",
      downloadable: false,
    },
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Fintech",
    "Healthcare",
    "Portfolio Insights",
    "Market Analysis",
    "Founder Resources",
    "Startup Insights",
    "Climate Tech",
    "Founder Support",
    "Fundraising",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecent = useMemo(() => {
    if (activeCategory === "All") return recentInsights;
    return recentInsights.filter(
      (r) => r.category === activeCategory || r.type === activeCategory
    );
  }, [activeCategory, recentInsights]);

  return (
    <div className="bg-white text-foreground overflow-hidden">
      {/* HERO HEADER */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[60vh] flex items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Insights & News
          </h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Thoughts on technology trends, investment insights, and the future
            of innovation from our team and portfolio companies.
          </p>
        </motion.div>
      </section>

      {/* FEATURED INSIGHTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Insights
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {featuredInsights.map((article, idx) => (
            <motion.div key={idx} {...cardHover}>
              <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-none bg-gradient-to-br from-white to-gray-50">
                <div className="aspect-video bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="space-y-3 px-6 pt-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6 flex justify-between text-sm text-muted-foreground">
                  <span>By {article.author}</span>
                  <span className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* RECENT INSIGHTS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-50 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Insights
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={cat === activeCategory ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecent.map((article, idx) => (
              <motion.div key={idx} {...cardHover}>
                <Card className="h-full flex flex-col justify-between rounded-3xl shadow-md hover:shadow-xl bg-white border border-gray-100 transition-all">
                  <CardHeader className="px-5 pt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {article.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PRESS RELEASES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release, idx) => (
            <motion.div key={idx} {...cardHover}>
              <Card className="rounded-3xl shadow-md hover:shadow-lg bg-white border border-gray-100 transition-all">
                <CardContent className="py-6 px-6 flex justify-between items-center">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Press Release
                    </Badge>
                    <h3 className="text-lg font-semibold mb-1">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground">{release.excerpt}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {new Date(release.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* NEWSLETTER */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/90 mb-6">
            Get our latest insights, investment announcements, and startup
            resources delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60"
            />
            <motion.div whileHover={{ scale: 1.03 }}>
              <Button size="lg" variant="secondary" className="px-[24px] py-[26px]">
                Subscribe
              </Button>
            </motion.div>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* FOUNDER RESOURCES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Founder Resources
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <motion.div key={idx} {...cardHover}>
              <Card className="rounded-3xl shadow-md hover:shadow-xl bg-white border border-gray-100 transition-all h-full flex flex-col justify-between">
                <CardHeader className="px-5 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold">
                      {resource.title}
                    </CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <Button
                    variant={resource.downloadable ? "secondary" : "outline"}
                    className="w-full flex justify-center items-center gap-2 hover:bg-[#13131b] hover:text-white"
                  >
                    {resource.downloadable ? "Download" : "Learn More"}
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default News;
