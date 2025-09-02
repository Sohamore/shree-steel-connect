import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Building, CheckCircle } from 'lucide-react';

const Projects = () => {
  const ongoingProjects = [
    {
      name: 'Mumbai Commercial Complex',
      location: 'Mumbai, Maharashtra',
      progress: 75,
      startDate: 'Jan 2024',
      expectedCompletion: 'Mar 2024',
      type: 'Commercial'
    },
    {
      name: 'Pune Industrial Warehouse',
      location: 'Pune, Maharashtra',
      progress: 40,
      startDate: 'Feb 2024',
      expectedCompletion: 'May 2024',
      type: 'Industrial'
    },
    {
      name: 'Nashik Residential Complex',
      location: 'Nashik, Maharashtra',
      progress: 60,
      startDate: 'Dec 2023',
      expectedCompletion: 'Apr 2024',
      type: 'Residential'
    }
  ];

  const completedProjects = [
    {
      name: 'Aurangabad Steel Plant',
      location: 'Aurangabad, Maharashtra',
      completionDate: 'Dec 2023',
      type: 'Industrial',
      image: '/placeholder.svg'
    },
    {
      name: 'Kolhapur Shopping Mall',
      location: 'Kolhapur, Maharashtra',
      completionDate: 'Nov 2023',
      type: 'Commercial',
      image: '/placeholder.svg'
    },
    {
      name: 'Nagpur Office Building',
      location: 'Nagpur, Maharashtra',
      completionDate: 'Oct 2023',
      type: 'Commercial',
      image: '/placeholder.svg'
    },
    {
      name: 'Solapur Residential Towers',
      location: 'Solapur, Maharashtra',
      completionDate: 'Sep 2023',
      type: 'Residential',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-background/20 text-primary-foreground border-primary-foreground/20">
            Our Projects
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Building Maharashtra's
            <br />
            <span className="text-gradient">Steel Infrastructure</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects and ongoing developments 
            across Maharashtra.
          </p>
        </div>
      </section>

      {/* Maharashtra Map Placeholder */}
      <section className="py-20 bg-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Project Locations</h2>
            <p className="text-lg text-muted-foreground">
              Our projects span across major cities in Maharashtra
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-medium p-8 text-center">
            <div className="aspect-[16/10] bg-steel-dark/10 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Google Maps integration will show project locations with detailed information
                </p>
              </div>
            </div>
            <Badge variant="outline">Google Maps Integration Required</Badge>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ongoing Projects</h2>
            <p className="text-lg text-muted-foreground">
              Track the progress of our current construction projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.type}</Badge>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Started: {project.startDate}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2" />
                      Expected: {project.expectedCompletion}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Completed Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing our successful project deliveries across Maharashtra
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-steel-dark/10">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Completed: {project.completionDate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Status CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Track Your Project Status
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you our client? Login to your project portal to get real-time updates 
            on your project's progress.
          </p>
          <Button size="lg" className="hero-gradient">
            Client Portal Login
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;