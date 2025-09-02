import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Building, CheckCircle } from 'lucide-react';
import ProjectDashboard from '@/components/ProjectDashboard';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ongoingProjects = [
    {
      id: 1,
      name: 'Mumbai Commercial Complex',
      location: 'Mumbai, Maharashtra',
      progress: 75,
      startDate: 'Jan 2024',
      expectedCompletion: 'Mar 2024',
      type: 'Commercial',
      client: 'Reliance Industries Ltd.',
      budget: {
        total: 5000000,
        spent: 3750000,
        remaining: 1250000,
        pending: 500000,
      },
      materials: [
        { name: 'Steel Beams (I-Section)', quantity: '50 tons', cost: 2500000, supplier: 'Tata Steel', status: 'delivered' },
        { name: 'Reinforcement Bars', quantity: '25 tons', cost: 1000000, supplier: 'JSW Steel', status: 'delivered' },
        { name: 'Steel Plates', quantity: '15 tons', cost: 750000, supplier: 'SAIL', status: 'pending' },
        { name: 'Welding Electrodes', quantity: '200 kg', cost: 50000, supplier: 'ESAB', status: 'ordered' },
      ],
      updates: [
        {
          date: '2024-09-01',
          title: 'Foundation Work Completed',
          description: 'All foundation steel work has been completed ahead of schedule. Quality inspection passed.',
          status: 'completed',
          images: ['img1.jpg', 'img2.jpg']
        },
        {
          date: '2024-08-25',
          title: 'Structural Steel Installation',
          description: 'Main structural steel installation is 80% complete. Expected completion by end of week.',
          status: 'in-progress'
        }
      ],
      team: {
        contractors: ['Mumbai Steel Contractors Pvt Ltd', 'Precision Welding Services'],
        supervisors: ['Rajesh Kumar (Site Engineer)', 'Suresh Patil (Quality Manager)'],
        laborCount: 24
      },
      approvals: [
        { type: 'Material Purchase Order', status: 'pending', date: '2024-09-05' },
        { type: 'Safety Compliance Certificate', status: 'approved', date: '2024-08-30' },
        { type: 'Progress Payment Release', status: 'pending', date: '2024-09-02' }
      ]
    },
    {
      id: 2,
      name: 'Pune Industrial Warehouse',
      location: 'Pune, Maharashtra',
      progress: 40,
      startDate: 'Feb 2024',
      expectedCompletion: 'May 2024',
      type: 'Industrial',
      client: 'Bajaj Auto Limited',
      budget: {
        total: 3200000,
        spent: 1280000,
        remaining: 1920000,
        pending: 320000,
      },
      materials: [
        { name: 'Steel Trusses', quantity: '32 units', cost: 1600000, supplier: 'Tata Steel', status: 'ordered' },
        { name: 'Roofing Sheets', quantity: '500 sqm', cost: 400000, supplier: 'Jindal Steel', status: 'pending' },
        { name: 'Column Brackets', quantity: '48 units', cost: 192000, supplier: 'Local Fabricator', status: 'delivered' },
      ],
      updates: [
        {
          date: '2024-08-30',
          title: 'Site Preparation Complete',
          description: 'Ground leveling and foundation marking completed. Ready for steel installation.',
          status: 'completed'
        }
      ],
      team: {
        contractors: ['Pune Industrial Solutions', 'Maharashtra Steel Works'],
        supervisors: ['Amit Sharma (Project Manager)', 'Deepak Joshi (Site Supervisor)'],
        laborCount: 18
      },
      approvals: [
        { type: 'Environmental Clearance', status: 'approved', date: '2024-08-20' },
        { type: 'Steel Quality Certificate', status: 'pending', date: '2024-09-01' }
      ]
    },
    {
      id: 3,
      name: 'Nashik Residential Complex',
      location: 'Nashik, Maharashtra',
      progress: 60,
      startDate: 'Dec 2023',
      expectedCompletion: 'Apr 2024',
      type: 'Residential',
      client: 'Godrej Properties',
      budget: {
        total: 4500000,
        spent: 2700000,
        remaining: 1800000,
        pending: 450000,
      },
      materials: [
        { name: 'TMT Bars', quantity: '75 tons', cost: 3000000, supplier: 'Kamdhenu Steel', status: 'delivered' },
        { name: 'Structural Angles', quantity: '20 tons', cost: 600000, supplier: 'SAIL', status: 'delivered' },
        { name: 'Steel Mesh', quantity: '1000 sqm', cost: 300000, supplier: 'JSW Steel', status: 'ordered' },
      ],
      updates: [
        {
          date: '2024-09-02',
          title: 'Balcony Steel Work',
          description: 'Installation of balcony railings and structural supports in progress.',
          status: 'in-progress'
        },
        {
          date: '2024-08-28',
          title: 'Floor Structure Complete',
          description: 'Steel structure for floors 1-5 completed successfully.',
          status: 'completed'
        }
      ],
      team: {
        contractors: ['Nashik Construction Co.', 'Elite Steel Fabricators'],
        supervisors: ['Prakash Desai (Chief Engineer)', 'Ravi Kulkarni (Safety Officer)'],
        laborCount: 30
      },
      approvals: [
        { type: 'Building Plan Approval', status: 'approved', date: '2024-08-15' },
        { type: 'Fire Safety Clearance', status: 'approved', date: '2024-08-22' }
      ]
    }
  ];

  const completedProjects = [
    {
      id: 4,
      name: 'Aurangabad Steel Plant',
      location: 'Aurangabad, Maharashtra',
      completionDate: 'Dec 2023',
      type: 'Industrial',
      image: '/placeholder.svg',
      client: 'Tata Steel Limited'
    },
    {
      id: 5,
      name: 'Kolhapur Shopping Mall',
      location: 'Kolhapur, Maharashtra',
      completionDate: 'Nov 2023',
      type: 'Commercial',
      image: '/placeholder.svg',
      client: 'Phoenix Mills Limited'
    },
    {
      id: 6,
      name: 'Nagpur Office Building',
      location: 'Nagpur, Maharashtra',
      completionDate: 'Oct 2023',
      type: 'Commercial',
      image: '/placeholder.svg',
      client: 'Infosys Technologies'
    },
    {
      id: 7,
      name: 'Solapur Residential Towers',
      location: 'Solapur, Maharashtra',
      completionDate: 'Sep 2023',
      type: 'Residential',
      image: '/placeholder.svg',
      client: 'Mahindra Lifespace'
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              <Card 
                key={index} 
                className="hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleProjectClick(project)}
              >
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

      {/* Project Dashboard Modal */}
      <ProjectDashboard 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;