import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../component/Rating';
import Product from "../products"
const ProductScreens = () => {
    const { id: productId } = useParams();
    const product = Product.find((p) => p._id === productId);
    console.log(product)

    return <>
        <Link className="btn btn-light my-3" to="/">
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews}reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>price: ${product.price}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>price</Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>

        </Row>

    </>;

};
export default ProductScreens;