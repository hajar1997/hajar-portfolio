import React, { useEffect } from "react";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <div id="skills" className="offset mt-4 mb-5">
      <h3 className="display-4 text-center fw-bold">Skills</h3>
      <hr className="w-50 mx-auto pb-5" />
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/html5-original.svg" />
            <p>HTML</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/css3-original.svg" />
            <p>CSS</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/javascript-original.svg" />
            <p>Javascript</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/bootstrap-original.svg" />
            <p>Bootstrap</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/react-original.svg" />
            <p>React</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/nextjs-original.svg" />
            <p>Next js</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/typescript-original.svg" />
            <p>Typescript</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/redux-original.svg" />
            <p>Redux</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/tailwindcss-original-wordmark.svg" />
            <p>Tailwind CSS</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5" data-aos="fade-up">
            <img src="images/github-original.svg" />
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
