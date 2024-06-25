import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { Grid, Box, Container, Card as MuiCard, CardActionArea, CardContent, CardMedia, Typography, Button as MuiButton } from '@mui/material';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Literasi = () => {
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/literasi');
        console.log(response.data); // Tambahkan log ini untuk melihat data
        setArticles(response.data);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.msg) {
          console.log(error.response.data);
          setError(error.response.data.msg);
        } else {
          console.error('Terjadi kesalahan:', error.message);
          setError('Terjadi kesalahan saat memuat data');
        }
      }
    };
    fetchStudents();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <Container className="mt-3">
      <ToastContainer transition={Bounce} />
      <Grid container spacing={4} justifyContent="center">
        {Array.isArray(articles) && articles.slice(0, 6).map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MuiCard sx={{ border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
              <CardActionArea href={`http://localhost:3000/literasi/${article.id}`} >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/300/200"
                  alt="Sample image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.judul_literasi}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {truncateText(article.isi_literasi, 80)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                <MuiButton variant="contained" color="primary" href={`http://localhost:3000/literasi/${article.id}`}>
                  Read More..
                </MuiButton>
              </Box>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Literasi;
