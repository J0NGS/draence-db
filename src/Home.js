import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center vh-100">
                <Col md={{ span: 7, offset: 3 }} className="text-center">
                    <h1>Draence DB</h1>
                    <Form>
                        <Form.Group controlId="searchBar" style={{padding: '10px' }}>
                            <Form.Control type="text" placeholder="Search players" className="rounded"/>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

const StyledHome = styled(Home)`
    background-color: #f0f0f0; // alterar a cor de fundo
    color: #333; // alterar a cor do texto
`;

export default StyledHome;