import React from "react";
import "../style/Home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithub}from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import profile from "../img/MateBudai.jpg";



const Home = () => {


    return (
        <div className="profile">
            <img className="picture"
                src = {profile} />
            <div className="text-about">
                <p>Hi, Welcome to my website !!  </p>
                <div className="profile-links">
                    {/* <div className="linkdin"> */}
                        <a href="https://www.linkedin.com/in/mate-budai">
                            <FontAwesomeIcon icon = {faLinkedinIn} />
                        </a>
                        {/* </div> */}
                    {/* <div className="github"> */}
                        <a href="https://github.com/belus90" >
                            <FontAwesomeIcon icon = {faGithub} />
                        </a>
                    {/* </div> */}
                    {/* <div className="email"> */}
                        <a href="mailto:mattebudai@gmail.com" >
                            <FontAwesomeIcon icon = {faPaperPlane} />
                        </a>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;