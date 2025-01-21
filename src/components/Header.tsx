import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: '1.2rem',
          fontWeight: 500,
          mb: 4,
        }}
      >
        Name-folio
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontSize: '48px',
          fontWeight: 600,
          mb: 2,
        }}
      >
        My projects
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontSize: '18px',
          maxWidth: '600px',
        }}
      >
        Lorem occaecat proident excepteur commodo id nulla eiusmod.
      </Typography>
    </Box>
  );
};
