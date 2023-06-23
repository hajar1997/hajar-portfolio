import Aos from "aos";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <div>
      <div id="about" className="offset mt-4 mb-4">
        <div className="container">
          <div className="post-heading text-center">
            <h3 className="display-4 fw-bold">About Me</h3>
            <hr className="w-50 mx-auto pb-5" />
          </div>
          <div className="row p-5 align-items-center">
            <div className="col-lg-6 col-md-6 col-12 pb-5 align-items-center text-center" data-aos="fade-up">
              <img src="images/IMG_8170.jpeg" className=" my-pic" alt />
            </div>
            <div className="col-lg-6 col-md-6 col-12" data-aos="fade-down">
              <h2>Who I am?</h2>
              <p className="mt-4 mb-5">
                My name is Hajar. I am skilled junior front-end developer from Baku, Azerbaijan.My passion is all about creating captivating web experiences and a commitment to continuous growth.{" "}
                <br /> <br /> Dedicated to delivering high-quality code and staying up-to-date with industry trends. Ready to contribute to innovative projects and make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
