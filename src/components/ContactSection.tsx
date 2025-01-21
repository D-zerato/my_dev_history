import { Box, Container, TextField, Button, Typography } from '@mui/material';

export const ContactSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 8, // 상하 패딩 증가
        mt: 10, // 상단 여백 증가
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 6, md: 8 }, // 간격 증가
            mb: 4, // 하단 여백 추가
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 600,
                mb: 4,
              }}
            >
              Say hello and let's
              <br />
              work together !
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3, // 폼 요소 간 간격 증가
            }}
          >
            <TextField
              placeholder="Your email address"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'transparent',
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                },
              }}
            />

            <TextField
              placeholder="Describe your project"
              multiline
              rows={6} // 텍스트 영역 높이 증가
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'transparent',
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                bgcolor: '#5c5cff',
                color: 'white',
                py: 1.5,
                px: 4,
                width: 'fit-content',
                mt: 2, // 버튼 상단 여백 추가
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
