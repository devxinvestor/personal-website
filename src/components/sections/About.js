import React from "react";
import "../../App.css";
import "../styles/About.css";
import { useStainEffect } from "../scripts/StainEffect";

function About() {
    const stains = useStainEffect('.biography-container p');

    return (
        <div id="about-section">
            <div className="about">
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
                            I am a Senior at the University of Florida pursuing a Bachelor of Science 
                            in Computer Science and a Master of Science in Finance. I enjoy investing 
                            and analyzing companies using both fundamental and technical processes. I am 
                            also involved in ML Research through UF Health Shands Hospital.
                            I am proficient in Python, Java, C++, Julia, MATLAB, SQL, and JavaScript. 
                            My professional experience spans both the sell-side and buy-side, having worked at an 
                            alternative capital advisory firm and an endowment investment office.
                            Outside of academics and work, I enjoy playing classical piano, basketball, and cubing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;