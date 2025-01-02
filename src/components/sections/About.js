import React from "react";
import "../../App.css";
import "../styles/About.css";
import BlackParticlesComponent from "../scripts/BlackParticles";
import { useStainEffect } from "../scripts/StainEffect";

function About() {
    const stains = useStainEffect('.biography-container p');

    return (
        <div id="about-section">
            <div className="about">
                <BlackParticlesComponent id="black-particle-system" />
                <div className="about-content">
                    <div className="about-container">
                        <img src="images/Devin Mohr.jpeg" alt="Devin_Mohr" />
                    </div>
                    <div className="biography-container">
                        <h1>About Me</h1>
                        <p>
                            {stains.map(stain => (
                                <span
                                    key={stain.id}
                                    className="stain-effect"
                                    style={{ top: `${stain.y}px`, left: `${stain.x}px` }}
                                />
                            ))}
                            I am a student at the University of Florida pursuing a Bachelor 
                            of Science in Computer Science and a Master of Science in Finance. 
                            I have experience in Python, C++, Julia, MATLAB, HTML, JavaScript, 
                            and CSS. I am proficient with frameworks such as TensorFlow, PyTorch, 
                            Pandas, NumPy, and Matplotlib, as well as tools like Jupyter Notebook, 
                            Visual Studio Code, React, and Git. I enjoy investing and performing 
                            financial analysis on data, using both fundamental and technical processes. 
                            I have experience on both the sell-side and buy-side, having worked at an 
                            alternative capital advisory firm and an endowment investment office.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;