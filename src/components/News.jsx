import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CalendarIcon, ClockIcon, ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';

export const News = () => {
  const featuredInsights = [
    {
      title: 'The Future of Enterprise AI: Beyond the Hype',
      excerpt: 'As AI becomes ubiquitous in enterprise software, we examine which applications will create lasting value and which are merely following trends.',
      category: 'AI & Technology',
      author: 'Nikhil K S',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjA1MjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      title: 'Fintech in 2024: The Infrastructure Play',
      excerpt: 'Why the next wave of fintech innovation will be built on infrastructure rather than consumer-facing applications.',
      category: 'Fintech',
      author: 'Nikhil K S',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwcGF5bWVudHxlbnwxfHx8fDE3NTc2MDUyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    }
  ];

  const recentInsights = [
    {
      title: 'Why We Invested in CloudSync Pro: The Data Integration Revolution',
      excerpt: 'Our investment thesis on the future of enterprise data integration and why CloudSync Pro is positioned to lead.',
      category: 'Portfolio Insights',
      author: 'Lumora Team',
      date: '2023-12-20',
      readTime: '5 min read',
      type: 'Investment'
    },
    {
      title: 'The Health Tech Opportunity: Digital-First Healthcare',
      excerpt: 'Exploring the $4 trillion healthcare market and the role of technology in improving patient outcomes.',
      category: 'Healthcare',
      author: 'Nikhil K S',
      date: '2023-12-15',
      readTime: '7 min read',
      type: 'Thought Leadership'
    },
    {
      title: 'Building in Public: Lessons from Our Portfolio Companies',
      excerpt: 'How transparency and community building are becoming competitive advantages for B2B startups.',
      category: 'Startup Insights',
      author: 'Lumora Team',
      date: '2023-12-10',
      readTime: '4 min read',
      type: 'Insights'
    },
    {
      title: 'The Climate Tech Investment Landscape in 2024',
      excerpt: 'Analyzing the opportunities and challenges in climate technology investments for the year ahead.',
      category: 'Climate Tech',
      author: 'Nikhil K S',
      date: '2023-12-05',
      readTime: '9 min read',
      type: 'Market Analysis'
    },
    {
      title: 'Founder Mental Health: The Hidden Challenge of Scaling',
      excerpt: 'Addressing the psychological challenges founders face during rapid growth phases and how VCs can help.',
      category: 'Founder Support',
      author: 'Nikhil K S',
      date: '2023-11-28',
      readTime: '6 min read',
      type: 'Thought Leadership'
    },
    {
      title: 'Series A Fundraising in a Challenging Market',
      excerpt: 'Practical advice for founders navigating Series A fundraising in the current economic environment.',
      category: 'Fundraising',
      author: 'Lumora Team',
      date: '2023-11-20',
      readTime: '8 min read',
      type: 'Founder Resources'
    }
  ];

  const pressReleases = [
    {
      title: 'Lumora Expands Investment Strategy with New Focus on Venture Studio',
      date: '2024-01-10',
      excerpt: 'Family office announces new venture studio initiative to build and incubate high-potential startups from the ground up.'
    },
    {
      title: 'Portfolio Company PayFlow Raises $15M Series A Led by Tier-1 VCs',
      date: '2023-12-18',
      excerpt: 'Payment processing startup PayFlow secures funding to accelerate product development and market expansion.'
    },
    {
      title: 'Lumora Portfolio Company DataVault Acquired by Microsoft for $240M',
      date: '2023-11-15',
      excerpt: 'Successful exit demonstrates strong returns and validates our enterprise software investment thesis.'
    }
  ];

  const categories = [
    'All',
    'AI & Technology',
    'Fintech',
    'Healthcare',
    'Portfolio Insights',
    'Market Analysis',
    'Founder Resources'
  ];

  return (
    <div className="py-8 space-y-16">
      {/* Header */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl">Insights & News</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on technology trends, investment insights, and the future of innovation from our team and portfolio companies.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl mb-8">Featured Insights</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredInsights.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>By {article.author}</span>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Insights */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl">Recent Insights</h2>
            <Button variant="outline" size="sm">
              View All Articles
              <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentInsights.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.type}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foregrounde">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <ClockIcon className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl mb-8">Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="py-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="text-xs">Press Release</Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(release.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    <h3 className="text-lg group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground">{release.excerpt}</p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 flex-shrink-0 mt-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl">Stay Updated</h2>
            <p className="text-xl text-primary-foreground/90">
              Get our latest insights, investment announcements, and startup resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl mb-8">Founder Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Startup Playbook',
              description: 'Comprehensive guide to building and scaling a startup from idea to Series A',
              type: 'Guide',
              downloadable: true
            },
            {
              title: 'Pitch Deck Template',
              description: 'Our battle-tested pitch deck template used by successful portfolio companies',
              type: 'Template',
              downloadable: true
            },
            {
              title: 'Financial Model Template',
              description: 'Investor-ready financial model template for SaaS and marketplace businesses',
              type: 'Spreadsheet',
              downloadable: true
            },
            {
              title: 'Due Diligence Checklist',
              description: 'Complete checklist to prepare your startup for investor due diligence',
              type: 'Checklist',
              downloadable: true
            },
            {
              title: 'Founder Mental Health Guide',
              description: 'Resources and strategies for maintaining mental health during the startup journey',
              type: 'Guide',
              downloadable: true
            },
            {
              title: 'Portfolio Company Network',
              description: 'Access to our portfolio company founder network and peer learning opportunities',
              type: 'Network',
              downloadable: false
            }
          ].map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                >
                  {resource.downloadable ? 'Download' : 'Learn More'}
                  <ExternalLinkIcon className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};