// src/components/Contact.jsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  TwitterIcon,
  CalendarIcon,
  FileTextIcon,
  MessageCircleIcon,
  RocketIcon
} from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    {
      icon: MailIcon,
      title: 'Email',
      description: 'Get in touch via email',
      contact: 'hello@lumaraventures.com',
      action: 'Send Email'
    },
    {
      icon: CalendarIcon,
      title: 'Schedule a Meeting',
      description: 'Book time to discuss your startup',
      contact: '30-minute intro call',
      action: 'Book Meeting'
    },
    {
      icon: LinkedinIcon,
      title: 'LinkedIn',
      description: 'Connect with Nikhil K S on LinkedIn',
      contact: '/in/nikhil-ks-vc',
      action: 'Connect'
    },
    {
      icon: TwitterIcon,
      title: 'Twitter',
      description: 'Follow us for updates and insights',
      contact: '@Lumora',
      action: 'Follow'
    }
  ];

  const inquiryTypes = [
    {
      type: 'Fundraising',
      icon: RocketIcon,
      description: 'Looking to raise capital for your startup',
      timeline: 'Response within 2 business days'
    },
    {
      type: 'Partnership',
      icon: MessageCircleIcon,
      description: 'Strategic partnerships and collaborations',
      timeline: 'Response within 1 week'
    },
    {
      type: 'Press & Media',
      icon: FileTextIcon,
      description: 'Media inquiries and speaking opportunities',
      timeline: 'Response within 3 business days'
    }
  ];

  const offices = [
    {
      location: 'San Francisco HQ',
      address: '123 Market Street, Suite 456\nSan Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@lumora.com'
    },
    {
      location: 'New York Office',
      address: '456 Broadway, Floor 12\nNew York, NY 10013',
      phone: '+1 (212) 555-0456',
      email: 'ny@lumora.com'
    }
  ];

  return (
    <div className="bg-white text-foreground overflow-hidden">
      {/* HERO HEADER */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[50vh] flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Whether you're a founder raising capital, a partner, or simply curious about our work — we’d love to connect.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Reach Out</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Choose a method that works best for you — email, meeting, or social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all bg-white text-center"
            >
              <CardContent className="pt-8 pb-8 space-y-5">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm">{method.contact}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <Card className="rounded-3xl border border-gray-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below — we’ll respond within 2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fundraising">Fundraising</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="Brief subject line" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your startup, partnership opportunity, or inquiry..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      I agree to the privacy policy and terms of service
                    </Label>
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* INQUIRY TYPES */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Inquiry Types</h3>
              <div className="space-y-4">
                {inquiryTypes.map((inquiry, index) => (
                  <Card key={index} className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition">
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <inquiry.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{inquiry.type}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{inquiry.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {inquiry.timeline}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">For Founders</h3>
              <Card className="bg-primary/5 border-primary/20 rounded-2xl">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RocketIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Raising Capital?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Include the following details in your message:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Brief company description and stage</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Funding amount and use of funds</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Key traction metrics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>Link to pitch deck (if available)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl font-bold">Our Offices</h2>
            <p className="text-muted-foreground text-lg">
              Visit us at our offices in San Francisco and New York.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="rounded-3xl border border-gray-100 shadow-md hover:shadow-lg bg-white transition"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                    <span>{office.location}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="whitespace-pre-line">{office.address}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <div className="flex items-center space-x-2">
                        <MailIcon className="h-4 w-4" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common questions about our investment process and what we look for in startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              question: 'What stage companies do you invest in?',
              answer:
                'We invest in seed and Series A companies with check sizes from $500K to $5M. Exceptional pre-seed founders are also considered.'
            },
            {
              question: 'How long is your investment process?',
              answer:
                'Our process typically takes 4–6 weeks from initial meeting to term sheet, with quick feedback at each stage.'
            },
            {
              question: 'Do you lead rounds?',
              answer:
                'Yes, we lead or co-lead seed and Series A rounds and participate in strong syndicates for strategic alignment.'
            },
            {
              question: 'What geographic regions do you invest in?',
              answer:
                'Primarily North America, but open to exceptional founders globally, especially in English-speaking markets.'
            },
            {
              question: 'What support do you provide portfolio companies?',
              answer:
                'We provide hands-on help in product strategy, go-to-market planning, hiring, fundraising, and partnerships.'
            },
            {
              question: 'How do I submit my pitch deck?',
              answer:
                'Submit via the contact form, email, or schedule a call — we review all decks within 2 business days.'
            }
          ].map((faq, index) => (
            <Card
              key={index}
              className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl shadow-lg">
          <CardContent className="text-center py-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're just getting started or ready to scale, we're here to support ambitious founders building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className='hover:bg-transparent hover:text-white hover:border-white hover:border'>
                Schedule a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Send Your Pitch Deck
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
