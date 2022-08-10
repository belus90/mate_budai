import React from "react";
import "../style/Projects.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import project1 from "../img/Projects/BeyondTraveling.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Portfolio = () => {


        return (

                <div class="projects">
                        <h2>My Projects</h2>
                        <br></br>
                        <div className="projects-card">
                                <div className="projects-card-1">
                                        <br></br>
                                        <Card border="light" style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={project1} />
                                                <Card.Body>
                                                        <Card.Title>Beyound Traveling</Card.Title>
                                                        <Card.Text>
                                                                <ul>
                                                                        <li> A travel application for disabled people to search for UK accommodations with easy access.</li>
                                                                        <li>The app is structured in two sections: wheelchair and deaf users.</li>
                                                                        <li> Created our own API using Java and Spring. </li>
                                                                        <li>Tech used: JavaScript, React, CSS, Bootstrap</li>
                                                                </ul>
                                                        </Card.Text>
                                                        <a href="https://www.google.com"> More information ... </a>
                                                </Card.Body>
                                        </Card>
                                        <br></br>
                                </div>
                                <div className="projects-card-4">
                                        <br></br>
                                        <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={project1} />
                                                <Card.Body>
                                                        <Card.Title>MNS Share portfolio</Card.Title>
                                                        <Button variant="primary">More information</Button>
                                                </Card.Body>
                                        </Card>
                                        <br></br>
                                </div>
                                <div className="projects-card-2">
                                        <br></br>
                                        <Card border="light" style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={project1} />
                                                <Card.Body>
                                                        <Card.Title>Gym Project</Card.Title>
                                                        <Card.Text>
                                                        Help a local gym to manage their membeships & classes
                                                        </Card.Text>
                                                        <a href="https://github.com/belus90" >
                                                                <FontAwesomeIcon icon={faGithub} /> More information ... </a>
                                                </Card.Body>
                                        </Card>
                                        <br></br>
                                </div>
                        </div>
                </div>

        );

};


export default Portfolio;