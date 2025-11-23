import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Acme Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    testimonial:
      'This product has been a game-changer for our company. The features are amazing and the customer support is outstanding.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Manager, Beta Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHdvbWFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    testimonial:
      'I highly recommend this service to anyone looking to improve their workflow. It\'s efficient, reliable, and easy to use.',
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'Software Engineer, Gamma Ltd',
    image: 'https://images.unsplash.com/photo-1534528741702-a0cfae5b6973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    testimonial:
      'The integration process was seamless, and the platform has helped us streamline our operations significantly. Great job!',
  },
    {
    id: 4,
    name: 'Sarah Johnson',
    title: 'Project Manager, Delta Co',
    image: 'https://images.unsplash.com/photo-1573496881335-7c8f6091f35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHdvbWFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    testimonial:
      'We were struggling to manage our projects effectively, but this tool has made it so much easier. I can\'t imagine working without it now!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-foreground">What Our Customers Say</h2>

        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true, dragFree: true }}>
          <CarouselContent className="-ml-1 md:ml-0">
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                <Card className="bg-card text-card-foreground shadow-md transition-colors duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-medium">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{testimonial.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                     <Quote className="h-4 w-4 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground italic">
                      {testimonial.testimonial}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-secondary-foreground text-secondary-foreground hover:text-secondary rounded-full w-8 h-8 flex items-center justify-center" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-secondary-foreground text-secondary-foreground hover:text-secondary rounded-full w-8 h-8 flex items-center justify-center" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;