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
      contact: 'hello@lumora.com',
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
    <div className="py-8 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a founder looking to raise capital, a fellow investor, or someone interested in our work, we'd love to hear from you.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm">{method.contact}</p>
                </div>
                <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
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

          {/* Inquiry Types & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-6">Inquiry Types</h3>
              <div className="space-y-4">
                {inquiryTypes.map((inquiry, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <inquiry.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1">{inquiry.type}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{inquiry.description}</p>
                          <Badge variant="outline" className="text-xs">{inquiry.timeline}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-6">For Founders</h3>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RocketIcon className="h-5 w-5 text-primary" />
                      <h4>Raising Capital?</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      If you're looking to raise capital, please include the following in your message:
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

      {/* Office Locations */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl">Our Offices</h2>
            <p className="text-muted-foreground">
              Visit us at our locations in San Francisco and New York
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
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

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about our investment process and what we look for in startups
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              question: 'What stage companies do you invest in?',
              answer: 'We primarily invest in seed and Series A companies, with check sizes ranging from $500K to $5M. We occasionally invest in pre-seed rounds for exceptional founders.'
            },
            {
              question: 'How long is your investment process?',
              answer: 'Our investment process typically takes 4-6 weeks from initial meeting to term sheet. We aim to provide quick feedback and move efficiently through due diligence.'
            },
            {
              question: 'Do you lead rounds?',
              answer: 'Yes, we can lead or co-lead rounds, especially for seed and Series A investments. We also participate in rounds led by other investors when there\'s strong strategic alignment.'
            },
            {
              question: 'What geographic regions do you invest in?',
              answer: 'We primarily invest in North American companies but are open to exceptional opportunities globally, especially in English-speaking markets.'
            },
            {
              question: 'What support do you provide portfolio companies?',
              answer: 'We provide hands-on support in areas like product strategy, go-to-market planning, hiring, follow-on fundraising, and connecting with our network of customers and partners.'
            },
            {
              question: 'How do I submit my pitch deck?',
              answer: 'You can submit your pitch deck through our contact form above, email us directly, or schedule a meeting through our calendar link. We review all submissions within 2 business days.'
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-16">
            <h2 className="text-3xl mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're just getting started or ready to scale, we're here to support ambitious founders building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Meeting
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Send Your Pitch Deck
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};