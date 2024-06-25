import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Typography, Box, Button } from '@mui/material';
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {  
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/literasi/${id}`);
        setArticle(response.data);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.msg) {
          setError(error.response.data.msg);
        } else {
          setError('Terjadi kesalahan saat memuat data');
        }
      }
    };
    fetchArticle();
  }, [id]);

  if (error) {
    return (
      <Container className="mt-3">
        <ToastContainer transition={Bounce} />
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container className="mt-3">
        <ToastContainer transition={Bounce} />
        <Typography variant="h6">
          Memuat artikel...
        </Typography>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      <ToastContainer transition={Bounce} />
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          {article.judul_literasi}
        </Typography>
        <img src="https://picsum.photos/800/400" alt="Sample" width="100%" />
      </Box>
      <Typography variant="body1">
        {article.isi_literasi}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" href="http://localhost:3000/literasi">
          Kembali ke Daftar Literasi
        </Button>
      </Box>
    </Container>
  );
}

export default ArticleDetail;
