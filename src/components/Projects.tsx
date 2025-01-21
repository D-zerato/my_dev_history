import { Grid } from '@mui/material';
import { Project } from '../model/Project';
import { ProjectCard } from './ProjectCard';

const projects: Project[] = [
  {
    id: 1,
    type: 'Product Photography',
    title: 'Paris secrets',
    description: 'Sint occaecat mollit et nulla do occaecat ut nulla',
    images: ['paris1.jpg', 'paris2.jpg'],
  },
  {
    id: 2,
    type: 'Landscape',
    title: 'Fairy tales',
    description: 'Sint occaecat mollit et nulla do occaecat ut nulla',
    images: ['fairy1.jpg'],
  },
];

const Projects = () => {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} md={6} key={project.id}>
          <ProjectCard project={project} isEven={index % 2 === 0} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
