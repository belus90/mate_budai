import React from "react";
import "../style/Home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithub}from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";



const Home = () => {


    return (
        <div className="profile">
            <img className="picture"
                src="https://images.unsplash.com/photo-1654354280759-131dd81097fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" />
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