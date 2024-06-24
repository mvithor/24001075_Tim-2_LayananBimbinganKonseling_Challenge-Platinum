import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ErrorImg from 'src/assets/images/backgrounds/403-forbiden.svg';

const InternalError = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="100vh"
    textAlign="center"
    justifyContent="center"
  >
    <Container maxWidth="md">
      <img src={ErrorImg} alt="403" style={{ 
                     position: 'relative',
                     top: 0, 
                     left: 0, 
                      width: '60%', 
                     height: '60%',
                      }}/>
      <Typography align="center" variant="h1" mb={4} mt={3}>
        Forbiden !!!
      </Typography>
      <Typography align="center" variant="h4" mb={4}>
      Sory you does not have access rights to the content.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        disableElevation
      >
        Go Back to Home
      </Button>
    </Container>
  </Box>
);

export default InternalError;
