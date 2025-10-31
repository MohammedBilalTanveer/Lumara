import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  CalendarIcon,
  FileTextIcon,
  MessageCircleIcon,
  RocketIcon,
} from 'lucide-react';
import PitchModal from './PitchModal';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

/* -------------------------------------------------
   Animation variants
   ------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -6, transition: { duration: 0.3 } },
};

export const Contact = ({ onPageChange }) => {
  const [showPitchModal, setShowPitchModal] = useState(false);
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

  /* ------------------- EmailJS ------------------- */
  const sendEmail = (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(
        'EmailJS is not configured — set VITE_EMAILJS_* environment variables.',
        { position: 'bottom-right' }
      );
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully', {
            position: 'bottom-right',
          });
          formRef.current?.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('Failed to send message. Try again later.', {
            position: 'bottom-right',
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  /* ------------------- Handlers ------------------- */
  const handleEmailClick = () => (window.location.href = 'mailto:hello@Lumaraventures.com');
  const handleScheduleMeeting = () => {
    document.getElementById('form-meet')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleLinkedInConnect = () =>
    window.open('https://www.linkedin.com/in/nikhil-k-s-b75302203/', '_blank');

  /* ------------------- Data ------------------- */
  const contactMethods = [
    {
      icon: MailIcon,
      title: 'Email',
      description: 'Get in touch via email',
      contact: 'hello@Lumaraventures.com',
      action: 'Send Email',
      onClick: handleEmailClick,
    },
    {
      icon: CalendarIcon,
      title: 'Schedule a Meeting',
      description: 'Book time to discuss your startup',
      contact: '30-minute intro call',
      action: 'Book Meeting',
      onClick: handleScheduleMeeting,
    },
    {
      icon: LinkedinIcon,
      title: 'LinkedIn',
      description: 'Connect with Nikhil K S on LinkedIn',
      contact: 'Nikhil K S',
      action: 'Connect',
      onClick: handleLinkedInConnect,
    },
  ];

  const inquiryTypes = [
    {
      type: 'Fundraising',
      icon: RocketIcon,
      description: 'Looking to raise capital for your startup',
      timeline: 'Response within 2 business days',
    },
    {
      type: 'Partnership',
      icon: MessageCircleIcon,
      description: 'Strategic partnerships and collaborations',
      timeline: 'Response within 1 week',
    },
    {
      type: 'Press & Media',
      icon: FileTextIcon,
      description: 'Media inquiries and speaking opportunities',
      timeline: 'Response within 3 business days',
    },
  ];

  const faqs = [
    {
      question: 'What stage companies do you invest in?',
      answer:
        'We invest in seed and Series A companies with check sizes from $500K to $5M. Exceptional pre-seed founders are also considered.',
    },
    {
      question: 'How long is your investment process?',
      answer:
        'Our process typically takes 4–6 weeks from initial meeting to term sheet, with quick feedback at each stage.',
    },
    {
      question: 'Do you lead rounds?',
      answer:
        'Yes, we lead or co-lead seed and Series A rounds and participate in strong syndicates for strategic alignment.',
    },
    {
      question: 'What geographic regions do you invest in?',
      answer:
        'Primarily India and North America, but open to exceptional founders globally, especially in English-speaking markets.',
    },
    {
      question: 'What support do you provide portfolio companies?',
      answer:
        'We provide hands-on help in product strategy, go-to-market planning, hiring, fundraising, and partnerships.',
    },
    {
      question: 'How do I submit my pitch deck?',
      answer:
        'Submit via the contact form, email, or schedule a call — we review all decks within 2 business days.',
    },
  ];

  return (
    <div className="bg-white text-foreground overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground min-h-[40vh] flex items-center justify-center text-center">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="max-w-3xl mx-auto px-4"
              >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Whether you're a founder raising capital, a partner, or simply
            curious about our work — we’d love to connect.
          </p>
        </div>
      </motion.div>
      </section>

      {/* ---------- CONTACT METHODS ---------- */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2 variants={itemUp} className="text-4xl font-bold">
            Reach Out
          </motion.h2>
          <motion.p
            variants={itemUp}
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
          >
            Choose a method that works best for you — email, meeting, or social.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="flex flex-wrap justify-center gap-8"
        >
          {contactMethods.map((method, idx) => (
            <motion.div
              key={idx}
              variants={itemUp}
              className="w-full sm:w-1/2 lg:w-1/4 max-w-xs"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="h-full"
              >
                <Card className="group rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all bg-white text-center h-full">
                  <CardContent className="pt-8 pb-8 space-y-5 flex flex-col justify-between h-full">
                    <div className="space-y-5">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm">{method.contact}</p>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                      onClick={method.onClick}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ---------- CONTACT FORM + INQUIRY TYPES ---------- */}
      <motion.section
        className="container mx-auto px-4 pb-20"
        id="form-meet"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* FORM */}
          <motion.div variants={itemUp}>
            <Card className="rounded-3xl border border-gray-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below — we’ll respond within 2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user_email">Email *</Label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select name="inquiryType" required>
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
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your startup, partnership opportunity, or inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1"
                      />
                      <Label
                        htmlFor="privacy"
                        className="text-sm text-muted-foreground"
                      >
                        I agree to the privacy policy and terms of service
                      </Label>
                    </div>

                    <Button
                      size="lg"
                      type="submit"
                      disabled={isSending}
                      className="w-full"
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* INQUIRY TYPES + FOUNDERS CARD */}
          <div className="space-y-8">
            <motion.div variants={itemUp}>
              <h3 className="text-xl font-semibold mb-6">Inquiry Types</h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="space-y-4"
              >
                {inquiryTypes.map((inquiry, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition">
                      <CardContent className="pt-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <inquiry.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{inquiry.type}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {inquiry.description}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {inquiry.timeline}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemUp}>
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
                      {[
                        'Brief company description and stage',
                        'Funding amount and use of funds',
                        'Key traction metrics',
                        'Link to pitch deck (if available)',
                      ].map((txt, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{txt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* ---------- FAQ ---------- */}
      <motion.section
        className="container mx-auto px-4 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="text-center space-y-3 mb-12"
        >
          <motion.h2 variants={itemUp} className="text-4xl font-bold">
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Common questions about our investment process and what we look for
            in startups.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {faqs.map((faq, idx) => (
            <motion.div key={idx} variants={itemUp}>
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={cardHover}
              >
                <Card className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ---------- CTA ---------- */}
      <motion.section
        className="container mx-auto px-4 pb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.div variants={itemUp}>
          <Card className="bg-primary text-primary-foreground rounded-3xl shadow-lg border-none overflow-hidden">
            <CardContent className="text-center py-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Whether you're raising capital for your startup or have an
                exceptional investment opportunity, we'd love to learn more
                about your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setShowPitchModal(true)}
                >
                  Submit Your Pitch Deck
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => {
                    onPageChange('contact');
                    setTimeout(() => {
                      document
                        .getElementById('form-meet')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* ---------- PITCH MODAL ---------- */}
      <PitchModal
        isOpen={showPitchModal}
        onClose={() => setShowPitchModal(false)}
      />
    </div>
  );
};