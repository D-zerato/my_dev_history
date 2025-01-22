interface Project {
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Habitual',
      description: 'A habit tracker for your personal growth journey.',
      image: '/images/habitual.png',
    },
    {
      title: 'Oasis',
      description: 'Curated playlists for every moment.',
      image: '/images/oasis.png',
    },
    {
      title: 'Liftoff',
      description: 'A simple, beautiful, and powerful to-do list.',
      image: '/images/liftoff.png',
    },
    {
      title: 'Bloom',
      description: 'A calming experience to write and reflect.',
      image: '/images/bloom.png',
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
