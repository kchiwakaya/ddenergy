import React from 'react'; // {{ edit_1 }}
import { useParams } from 'react-router-dom'; // {{ edit_2 }}
import dummyProducts from './productlist'; // {{ edit_3 }}
import { Card, Button } from 'react-bootstrap'; // {{ edit_4 }}

const ProductDetail = () => { // {{ edit_5 }}
  const { id } = useParams(); // {{ edit_6 }}
  const product = dummyProducts.find((p) => p.id === parseInt(id)); // {{ edit_7 }}

  if (!product) {
    return <div>Product not found</div>; // {{ edit_8 }}
  }

  return (
    <div className="d-flex justify-content-center mt-4"> 
      <Card style={{ width: '30rem' }}> 
        <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} /> 
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${product.price} {/* {{ edit_12 }} */}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {product.description} {/* {{ edit_13 }} */}
          </Card.Text>
          <Button variant="primary" href="/">Back to Products</Button> {/* {{ edit_14 }} */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail; // {{ edit_15 }}
