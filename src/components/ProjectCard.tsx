import { Box, Card, Typography } from '@mui/material';

interface ProjectCardProps {
  project: {
    type: string;
    title: string;
    description: string;
    images: string[];
  };
  isEven: boolean;
}

export const ProjectCard = ({ project, isEven }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        padding: '2rem',
        backgroundColor: isEven ? '#ffefef' : '#efefff',
        boxShadow: 'none',
        borderRadius: '10px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          fontSize: '14px',
          mb: 1,
          display: 'block',
        }}
      >
        {project.type}
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontSize: '24px',
          fontWeight: 500,
          mb: 2,
        }}
      >
        {project.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: 3,
        }}
      >
        {project.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 3,
        }}
      >
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            style={{
              width: '200px',
              height: '250px',
              objectFit: 'cover',
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        View project →
      </Typography>
    </Card>
  );
};
