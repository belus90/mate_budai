import React from "react";
import "../style/Technical.css"
import js from "../img/Tech_img/js.jpeg";
import java from "../img/Tech_img/Java.jpeg";
import atom from "../img/Tech_img/atom.png";
import git from "../img/Tech_img/Git.png";
import insomnia from "../img/Tech_img/insomnia.png";
import mongo from "../img/Tech_img/mongo.png";
import postico from "../img/Tech_img/postico.png";
import postman from "../img/Tech_img/postman.png";
import postSQL from "../img/Tech_img/postSQL.png";
import slack from "../img/Tech_img/slack.png";
import spring from "../img/Tech_img/Spring boot.png";
import trello from "../img/Tech_img/trello.png";
import vscode from "../img/Tech_img/VScode.png";
import css from "../img/Tech_img/css.png";
import github from "../img/Tech_img/github.png";
import html from "../img/Tech_img/html.png";
import react from "../img/Tech_img/react.png";
import python from "../img/Tech_img/python.png";
import intelij from "../img/Tech_img/intelIj.png";


const Technical = () => {

    return (

        <div className="tech-skills">
            <h3>Tech </h3>
            <div className="tech-skills-img">
                <div className="tech"><img src={js} alt="JavaScript" /><br></br>JavaScript</div>
                <div className="tech">  <img src={react} alt="React" /><br></br>React</div>
                <div className="tech"><img src={css} alt="Css"/><br></br> CSS</div>
                <div className="tech">  <img src={html} alt="HTML"/><br></br>HTML</div>
                <div className="tech"><img src={java} alt="Java"/><br></br>Java</div>
                <div className="tech"> <img src={intelij} alt="IntelIJ"/><br></br>IntelIJ</div>
                <div className="tech"><img src={python} alt="Python" /><br></br>Python </div>
                <div className="tech"><img src={github} alt="GitHub" /> <br></br> GitHub</div>
                <div className="tech"><img src={git} alt="Git" /><br></br>Git</div>
                <div className="tech"><img src={insomnia} alt="Insomnia"/><br></br>Insomnia</div>
                <div className="tech"><img src={postman} alt="Postman"/><br></br> Postman</div>
                <div className="tech"><img src={postico} alt="Postico" /><br></br>Postico</div>
                <div className="tech"><img src={mongo} alt="MongoDB" /><br></br>MongoDB</div>
                <div className="tech"><img src={postSQL} alt="postSQL" /> <br></br>postSQL</div>
                <div className="tech"><img src={spring} alt="Spring Boot"/><br></br>Spring</div>
                <div className="tech"><img src={slack} alt="Slack" /> <br></br>Slack</div>
                <div className="tech"><img src={trello} alt="Trello" /><br></br>Trello</div>
                <div className="tech"><img src={vscode} alt="VSCode" /><br></br>VSCode</div>
                <div className="tech"><img src={atom} alt="Atom" /><br></br>Atom</div>
            </div>
        </div>
    );

};

export default Technical;