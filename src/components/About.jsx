import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className="min-h-screen p-8">
      <div className=" max-w-4xl mx-auto rounded-lg">
        <h1 className="hollow-text text-6xl font-bold text-start mb-6 "><span className="text-[#19171A]">About Me</span>.<span></span></h1>
        
       
        <div className="w-28 h-[2px] bg-white my-9"></div>
        
        <p className="text-lg text-[#959794] py-7">
        I am a passionate web developer with a solid foundation in HTML, CSS, JavaScript, and React. I thrive on creating dynamic user interfaces and delivering seamless web experiences. Currently, I'm expanding my skills in Python and exploring backend development to become a more versatile developer.
        </p>
        
        <p className="text-lg text-[#959794] py-7">
        My goal is to combine creativity with technical expertise to build innovative solutions that solve real-world problems. I am excited about collaborating on challenging projects that contribute to my professional growth and learning.
        </p>
        <div className="flex gap-7 mt-10">
          <div className="w-7">
          <a href="mailto:thisisshahbaj@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', color: '#fff' }}/>
          </a>
          </div>
          <div className="w-7">
          <a href="https://github.com/CodeReader101">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: '#fff' }}/>
          </a>
          </div>
          <div className="w-7">
          <a href="https://www.linkedin.com/in/shahbaj-sheikh/">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: '#fff' }}/>
          </a>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default AboutMe;

