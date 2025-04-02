import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tech: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  github,
  demo,
  tech,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex gap-4 w-full">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 flex-1"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="flex items-center gap-2 flex-1"
              asChild
            >
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
