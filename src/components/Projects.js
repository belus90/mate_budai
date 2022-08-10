import React from "react";
import "../style/Projects.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Portfolio = () => {


        return (

        <div class="projects">
        <h2>My Projects</h2>
        <br></br>
        <div className="projects-card">
                <div className="projects-card-1">
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                                <Card.Title>Gym Project</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                <br></br>
                </div>
                <div className="projects-card-2">
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                                <Card.Title>Gym Project</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                <br></br>
                </div>
                <div className="projects-card-3">
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                                <Card.Title>Gym Project</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                <br></br>
                </div>
                <div className="projects-card-4">
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                                <Card.Title>Gym Project</Card.Title>
                                <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                <br></br>
                </div>
                        
                
                                {/* <a href="https://github.com/belus90/First_project">Gym project</a>
                        <a href="https://github.com/belus90/rock_paper_scissors">MSN Share Portfolio</a>
                        <a href="">Beyond travelling App</a>
                        <a href="">Extra</a> */}
        </div>
        </div>            

        );

};


export default Portfolio;