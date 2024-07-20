import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Stack, Typography, CircularProgress, Button } from "@mui/material";
import { Product } from "src/types/Product";
import QuantitySelector from "src/components/ButtonNumber";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import StarIcon from '@mui/icons-material/Star';

function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();

  const getProduct = async (_id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return <Typography variant="h6" textAlign="center">Không tìm thấy sản phẩm</Typography>;
  }

  return (
    <>
      <Header />
      <Box sx={{ my: 6 }}>
        <Container>
          <Stack direction="row" spacing={4} alignItems="flex-start">
            <Box
              sx={{
                width: { xs: "100%", sm: "470px" }, // Set the same width for image
                borderRadius: 2,
                boxShadow: 3,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: '100%', // Ensure image fits within the Box
                  borderRadius: 5,
                }}
              />
            </Box>
            <Stack spacing={3} sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" fontWeight="bold">
                {product.title}
              </Typography>
              <Box sx={{ width: { xs: "100%", sm: "300px" } }}>
                <Button
                  variant="contained"
                  sx={{
                    mb: 2,
                    width: '50%', // Ensure button takes up the full width of its container
                    bgcolor: 'black', // Set button color to black
                    color: 'white', // Set text color to white for contrast
                    '&:hover': {
                      bgcolor: 'grey.800', // Optional: Darken button color on hover
                    }
                  }}
                >
                  New
                </Button>
              </Box>
              <Stack spacing={1}>
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6" sx={{ color: "black", mr: 1 }}>
                    Giá tiền: {product.price} VND
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} sx={{ color: "gold", fontSize: 24 }} />
                  ))}
                </Stack>
              </Stack>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <QuantitySelector />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ProductDetail;

function setError(_arg0: string) {
  throw new Error("Function not implemented.");
}
