import React from 'react'; // {{ edit_1 }}
import { Card, Button, Row, Col } from 'react-bootstrap'; // {{ edit_2 }}
import dummyProducts from './productlist'; // {{ edit_3 }}
import { Link } from 'react-router-dom'; // {{ edit_1 }}

const Products = () => { // {{ edit_4 }}
  return (
    <div className='container'>
    <Row className="d-flex justify-content-center"> 
      {dummyProducts.map((product) => ( // {{ edit_6 }}
        <Col xs={12} sm={6} md={4} key={product.id} className="mb-4 p-2">
          <Card style={{ width: '100%' }}>
            <Card.Img 
              variant="top" 
              src={product.image} 
              style={{ height: '200px', objectFit: 'cover' }} // {{ edit_8 }}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/product/${product.id}`}>
                <Button variant="primary">View Details</Button>
              </Link> {/* {{ edit_9 }} */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Products; // {{ edit_10 }}
