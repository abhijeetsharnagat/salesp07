import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Meghraj Jogdand</strong>. I'm a dedicated and skilled Embedded Hardware Engineer with over 1 year of experience and a passion for developing cutting-edge IoT solutions.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey in technology began with my studies in Electronics and Telecommunication Engineering at MIT Academy of Engineering, Pune. Throughout my academic career and professional experiences, I've had the opportunity to work on fascinating projects that have enhanced my skills in designing, programming, and testing projects aimed at improving connectivity and automation across diverse industries.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I've had the privilege of working with companies like EasyReach Private Limited and Tork Motors, where I've contributed to innovative IoT solutions and EV development. My experiences have reinforced my passion for embedded systems and IoT, and I'm excited to continue exploring new challenges in these fields.
           
            </ScrollAnimation>
            

            
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;