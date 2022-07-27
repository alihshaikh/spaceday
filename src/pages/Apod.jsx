import React, { Component } from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import {Container, Col, Row, Form, InputGroup} from 'react-bootstrap'
import {useState} from 'react'

class Apod extends React.Component {

    state = {
        loading: true,
        description: null,
        picture: null,
        date: '',
    };

    async componentDidMount() {
        let API_KEY = "zDSdTjt76Kc2eQke3XdkG09JWVWppZDg1X0R0dRO"
        // const response = await fetch ('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY );
        const response = await fetch ('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY + '&date=' + this.state.date);
        const data = await response.json();
        this.setState({description: data.explanation, picture: data.url})
        console.log(data);
    }

    handleChange = event => {
        this.setState({date: event.target.value});
    };

    handleClick = event => {
        this.setState({date:event.target.value});
        console.log(this.state.date)
    }

    onSubmit = () => {
        console.log(this.state.val)
        this.componentDidMount()
    }

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
                            val = {this.state.date}
                            onChange= {e => this.setState({date: e.target.value})}
                            />
                            <Button variant="outline-secondary" id="button-addon2"
                            onClick={this.onSubmit}
                            >
                            Enter
                            </Button>
                        </InputGroup>
                        </Col>
                    </Row>
                </Container>

                    <div className="center">
                        <Container fluid>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <img src= {this.state.picture} alt=""></img>
                                    <div className="description">
                                        <p1>{this.state.description}</p1>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </div>
                
        </div>;
    }
}
 
export default Apod;