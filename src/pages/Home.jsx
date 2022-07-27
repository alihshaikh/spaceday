import React, { Component } from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import {Container, Col, Row, Form, InputGroup} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import {Link} from 'react-router-dom'


class Home extends React.Component {
    render() { 
        return <div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="title">
                            <h1>What's my Space?</h1>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                    <InputGroup className="mb-3 title">
                        <Form.Control
                        placeholder="Enter desired date (YYYY-MM-DD)"
                        aria-label="Enter desired date (YYYY-MM-DD)"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                        Enter
                        </Button>
                    </InputGroup>
                    </Col>
                </Row>
            </Container>


            <div className="slogan">
                    
                    <h1><Typewriter
                        options={{
                            strings: ['Learn more about your universe.'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </h1>


            </div>
            <div className="buttonformat">
                <Link to="/Apod">
                    <Button id="search" variant="secondary" size="lg">
                        Today's Astrological Picture
                    </Button>
                </Link>
            </div>

        </div>;
    }
}
 
export default Home;