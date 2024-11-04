import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products using axios
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100"> 
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', padding: '10px' }} 
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="flex-grow-1">{product.title}</Card.Title>
                  <Card.Text>
                    ${product.price}
                  </Card.Text>
                  <div className="mt-auto">
                    <Link to={`/product/${product.id}`} className="w-100 text-center">
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <h2>No products found</h2>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
