import "./Dr.css";
import Drpic from "../../Assets/DR.jpg"
import React from "react";


const Dr = ({refs}) => {
    return (
        <div ref={refs.aboutRef} className="Dr-wraper">
                    <div className="Dr-container">
            <div className="left-dr">
                <div className="bg-dr"></div>
                <img alt="" src={Drpic}></img>
            </div>
            <div className="right-dr">
            <h4>About Me</h4>
            <h2>Dr. Kethy Lee</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing e
                lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
                <li>Lorem Ipsum is simply dummy text</li>
                <li>It is a long established fact that a reader</li>
                <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                <li>There are many variations of passages</li>
                <li>When an unknown printer took a galley of type and scrambled </li>
                <li>The standard chunk of Lorem Ipsum used</li>
            </ul>
            </div>
        </div>
        </div>

    );
}

export default Dr;