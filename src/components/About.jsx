import React from "react";
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

export const About = () => {
  const experiences = [
    {
      period: "2019 - Present",
      role: "Founder and Partner",
      company: "Investment Fund",
      location: "Bangalore, Karnataka",
      description:
        "$12M venture and growth equity fund investing in infrastructure providers driving India's modernization",
      highlights: [
        {
          title: "Success Stories:",
          items: [
            "National Stock Exchange: invested during pandemic; delivered 10.5x returns in 5 years",
            "Anand Rathi Wealth: early stage bet on wealth management; delivered 37.7x returns in 8 years (IPO)",
          ],
        },
        {
          title: "Early-stage portfolio company experience:",
          items: [
            "Indulge (luxury concierge service): Architected a pricing strategy with 50% margin; pivoted to WhatsApp only operational model and increased engagement by 5x, negotiated zero-cost partnerships with communities such as YPO and EO; and expanded into a 50+ HNI category with a strategic hire",
            "Das Steigen (EV Components manufacturer): reduced 3-d printing material costs by up to 90%; cut adoption cycles to less than 6 months and inputs costs for OEMs by 40%; negotiated a contract for neodymium magnets after China's export ban; and expanded TAM by $40Mn by venturing into drone motors and achieved a working prototype",
          ],
        },
      ],
    },
    {
      period: "2020 - Present",
      role: "Partner and CIO",
      company: "Family Office",
      location: "Bangalore, Karnataka",
      description: "$60M investment vehicle for the family",
      highlights: [
        {
          items: [
            "Professionalized the $30 million family portfolio via a tax efficient entity, governance frameworks and investment policy scheme and scaled it to $60 million in 5 years",
            "Structured family philanthropy in healthcare and education, deploying over $1 million every year to benefit over 6000 people through scholarships, school infrastructure and health camps",
            "Led the family portfolio strategic shift from Debt/Real Estate to Public and Private markets, delivering returns at 18% CAGR since inception",
            "Built venture studio for early-stage start-ups, providing GTM, hiring, and fundraising support and driving revenue growth and customer bases across portfolio",
          ],
        },
      ],
    },
    {
      period: "2015 - Present",
      role: "Strategy and Business Development",
      company: "VESCO",
      location: "Bangalore, Karnataka",
      description: "$100 million family-owned mining business",
      highlights: [
        {
          items: [
            "Negotiated an exclusive supply contract for low-grade iron ore, securing 15-20% more than the market price and boosting revenues by 10% annually",
            "Developed screening solution to produce high-tumbler index for sponge iron plant, fetching 25% premium over the marker prices and boosting revenue by more than 12%",
            "Found a solution to convert ultra low-grade iron ore into high-grade via beneficiation partnership, doubling income and driving 15% y-o-y growth",
            "Led a large-scale environmental remediation program to cut down AQI, improving water quality and restoring ground water",
            "Secured renewal of 46-acre mining lease, unlocking 0.55 MMT of production capacity and employment for 80+ skilled and unskilled workers",
          ],
        },
      ],
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
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl">About Lumora</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A family office dedicated to partnering with exceptional
            entrepreneurs and managing diversified investments across private
            and public markets with a focus on long-term value creation.
          </p>
        </div>
      </section>

      {/* Nikhil's Profile */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="relative">
              <ImageWithFallback
               src={Nikhil}
                alt="Nikhil K S - Founder of Lumora"
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                <AwardIcon className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl mb-2">Nikhil K S</h2>
              <p className="text-xl text-muted-foreground mb-4">
                Founder & Managing Partner
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="flex space-x-2">
                  <LinkedinIcon className="h-4 w-4 cursor-pointer hover:text-primary" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg">
                Nikhil K S founded Lumora with a singular mission: to build a
                family office that combines strategic capital deployment with
                deep operational expertise to create lasting value across
                generations.
                With expertise spanning venture capital, family office
                management, and operational leadership in mining and financial
                services, Nikhil brings a unique blend of investment acumen and
                hands-on business building experience. His portfolio includes
                notable successes like Anand Rathi Wealth (37.7x returns) and
                National Stock Exchange (10.5x returns).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUpIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl mb-1">$60M</div>
                  <p className="text-sm text-muted-foreground">AUM (Family Office)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <BarChart3Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl mb-1">18%</div>
                  <p className="text-sm text-muted-foreground">CAGR Since Inception</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12">Professional Experience</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{experience.role}</CardTitle>
                      <CardDescription className="text-base">
                        {experience.company} • {experience.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{experience.description}</p>
                  {experience.highlights.map((highlight, idx) => (
                    <div key={idx} className="space-y-3">
                      {highlight.title && (
                        <h4 className="text-sm">{highlight.title}</h4>
                      )}
                      <ul className="space-y-2">
                        {highlight.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Experience */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Board Experience</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BuildingIcon className="h-5 w-5 text-primary" />
                    {boardExperience.role}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {boardExperience.company} • {boardExperience.location}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {boardExperience.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {boardExperience.description}
              </p>
              <div>
                <h4 className="text-sm mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {boardExperience.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl text-center mb-12 flex items-center justify-center">
            <GraduationCapIcon className="h-8 w-8 mr-3 text-primary" />
            Education
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.school} • {edu.location}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <Badge variant="outline">{edu.period}</Badge>
                      <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {edu.honors && (
                    <div>
                      <h4 className="text-sm mb-2">Honors & Recognition:</h4>
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
                      <h4 className="text-sm mb-2">Activities:</h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.activities}
                      </p>
                    </div>
                  )}
                  {edu.thesis && (
                    <div>
                      <h4 className="text-sm mb-2">Thesis:</h4>
                      <p className="text-sm text-muted-foreground">{edu.thesis}</p>
                    </div>
                  )}
                  {edu.internship && (
                    <div>
                      <h4 className="text-sm mb-2">Internship:</h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.internship}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Additional</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HeartIcon className="h-5 w-5 text-primary" />
                Community Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Working with doctors, a regional hospital, and a healthcare
                startup to design scalable models for emergency care delivery
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
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

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-primary" />
                Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Avid tennis and poker enthusiast, pursuing both as lifelong
                passions that reflect strategy and love for learning
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl">Investment Philosophy</h2>
            <blockquote className="text-2xl italic text-muted-foreground">
              "True wealth is measured not by what we accumulate, but by the
              positive impact we create in society and the lasting value we
              build across generations."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  principle: "Operational Value-Add",
                  description:
                    "Hands-on support in pricing, GTM strategy, hiring, and operational excellence to drive portfolio growth.",
                },
                {
                  principle: "Patient Capital",
                  description:
                    "Long-term partnership approach with focus on sustainable growth and 18%+ CAGR returns.",
                },
                {
                  principle: "Impact-Driven",
                  description:
                    "Combining financial returns with social impact through structured philanthropy and community development.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.principle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
