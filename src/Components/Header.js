import React from "react";
import {Jumbotron, Container, Row, Col} from 'reactstrap';

function Header() {
    return (
    <Jumbotron fluid className="fixed-top">
        <Container className="mx-auto">
            <Row>
                <Col xs="4" className="align-self-center">
                    <>TEA ERA </>
                </Col>
                <Col xs="2" className="align-self-center">
    <i className="d-none d-md-block">home</i>
                </Col>
                <Col xs="2" className="align-self-center">
                <i className="d-none d-md-block">home</i>
                </Col>
                <Col xs="2" className="align-self-center">
                <i className="d-none d-md-block">home</i>
                </Col>
            </Row>
        </Container>
    </Jumbotron>);
}

export default Header;
