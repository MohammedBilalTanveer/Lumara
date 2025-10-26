import React from "react";
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
  HeartIcon,
  GraduationCapIcon,
  UsersIcon,
  BookOpenIcon,
  BuildingIcon,
  ActivityIcon,
  TrendingUpIcon,
  HandHeartIcon,
} from "lucide-react";

export const Philanthropy = () => {
  const impactStats = [
    {
      icon: UsersIcon,
      value: "6,000+",
      label: "Individuals Impacted Annually",
      description: "Lives touched through our education and healthcare initiatives",
    },
    {
      icon: TrendingUpIcon,
      value: "₹8 Cr+",
      label: "Donated Annually",
      description: "Committed to creating sustainable social impact",
    },
    {
      icon: GraduationCapIcon,
      value: "50+",
      label: "College Scholarships",
      description: "Supporting students to achieve their educational dreams",
    },
    {
      icon: ActivityIcon,
      value: "4,000+",
      label: "Health Screenings",
      description: "Annual health camp screenings across communities",
    },
  ];

  const educationPrograms = [
    {
      title: "College Scholarship Program",
      description:
        "Merit-based scholarships covering full tuition, books, and living expenses for deserving students from underprivileged backgrounds",
      impact: "50+ students supported annually",
      icon: GraduationCapIcon,
      stats: [
        "100% tuition coverage",
        "₹2-5 lakh per student annually",
        "4-year commitment per scholar",
      ],
    },
    {
      title: "Government School Infrastructure",
      description:
        "Building and upgrading school infrastructure including classrooms, laboratories, computer labs, and sports facilities",
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
        "Establishing and maintaining well-stocked libraries with books, digital resources, and reading programs to foster learning",
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
        "Free comprehensive health screening camps conducted quarterly in underserved communities with specialist doctors",
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
        "Community health awareness programs focusing on nutrition, hygiene, maternal health, and disease prevention",
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
        "Supporting government hospitals and primary health centers with essential medical equipment and diagnostic tools",
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
        "Empowering the next generation through quality education, infrastructure, and scholarships",
      color: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-500",
      icon: GraduationCapIcon,
      programs: educationPrograms.length,
      beneficiaries: "3,000+",
    },
    {
      title: "Healthcare",
      description:
        "Improving community health through free medical camps, awareness programs, and infrastructure support",
      color: "bg-red-500/10 border-red-500/20",
      iconColor: "text-red-500",
      icon: HeartIcon,
      programs: healthcarePrograms.length,
      beneficiaries: "3,000+",
    },
  ];

  return (
    <div className="py-8 space-y-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            Creating Value & Impact
          </Badge>
          <h1 className="text-4xl lg:text-5xl">Philanthropy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe wealth must create both value and impact. Through our
            family foundation, we focus on education and healthcare, impacting
            over 6,000 individuals annually.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl mb-1">{stat.value}</div>
                <p className="mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl">Our Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We concentrate our philanthropic efforts on two critical pillars
              that create lasting change in communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className={area.color}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 bg-background rounded-lg">
                      <area.icon className={`h-6 w-6 ${area.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Active Programs
                      </p>
                      <p className="text-2xl">{area.programs}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Beneficiaries
                      </p>
                      <p className="text-2xl">{area.beneficiaries}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-2">
            <GraduationCapIcon className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-3xl">Education Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering students and transforming schools to build a brighter
            future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {educationPrograms.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-3">
                  <program.icon className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm">
                    <span className="text-primary">Impact:</span> {program.impact}
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2">Key Highlights:</p>
                  <ul className="space-y-2">
                    {program.stats.map((stat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-500/5 border-blue-500/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-1 text-blue-500">50+</div>
                <p className="text-sm text-muted-foreground">
                  College Scholarships Awarded
                </p>
              </div>
              <div>
                <div className="text-3xl mb-1 text-blue-500">10+</div>
                <p className="text-sm text-muted-foreground">
                  Government Schools Supported
                </p>
              </div>
              <div>
                <div className="text-3xl mb-1 text-blue-500">10,000+</div>
                <p className="text-sm text-muted-foreground">
                  Books & Resources Distributed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Healthcare Programs */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-full mb-2">
              <HeartIcon className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-3xl">Healthcare Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing accessible healthcare and promoting wellness in
              underserved communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {healthcarePrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-red-500/10 rounded-lg w-fit mb-3">
                    <program.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm">
                      <span className="text-primary">Impact:</span> {program.impact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm mb-2">Key Highlights:</p>
                    <ul className="space-y-2">
                      {program.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-red-500/5 border-red-500/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-1 text-red-500">4</div>
                  <p className="text-sm text-muted-foreground">
                    Annual Health Camps
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-1 text-red-500">1,000+</div>
                  <p className="text-sm text-muted-foreground">
                    Patients Screened Per Camp
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-1 text-red-500">5+</div>
                  <p className="text-sm text-muted-foreground">
                    Healthcare Facilities Equipped
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-8 pb-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <HandHeartIcon className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl">Our Philanthropic Philosophy</h2>
              <p className="text-xl text-primary-foreground/90">
                We believe that true wealth is measured not by what we
                accumulate, but by the positive impact we create in society.
                Our approach to philanthropy is systematic, sustainable, and
                focused on creating lasting change in education and healthcare.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-2xl">Sustainable</div>
                  <p className="text-sm text-primary-foreground/80">
                    Long-term programs that create lasting impact beyond
                    one-time interventions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">Measurable</div>
                  <p className="text-sm text-primary-foreground/80">
                    Data-driven approach with clear metrics to track and
                    improve our impact
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">Scalable</div>
                  <p className="text-sm text-primary-foreground/80">
                    Building models that can be replicated and expanded to
                    reach more communities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
