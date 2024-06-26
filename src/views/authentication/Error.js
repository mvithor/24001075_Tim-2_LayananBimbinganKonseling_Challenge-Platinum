import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import ErrorImg from 'src/assets/images/backgrounds/errorimg.svg';

const Error = () => {
  const navigate = useNavigate()
  const handleCancel = () => {
    navigate(-1); 
  };
  return (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img src={ErrorImg} alt="404" />
      <Typography align="center" variant="h1" mb={4}>
        Opps!!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
        This page you are looking for could not be found.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        type="button"
        onClick={handleCancel}
      
      >
        Go Back to Home
      </Button>
    </Container>
  </Box>
);
}



export default Error;
