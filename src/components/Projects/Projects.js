import React, { useEffect } from "react";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  return (
    <div id="projects" className="offset container mt-4 mb-5">
      <div className="post-heading text-center" data-aos="fade-up">
        <h3 className="display-4 fw-bold">Projects</h3>
        <hr className="w-50 mx-auto pb-5" />
      </div>
      <div className="row">
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/rass-all.png" alt />
            <div className="overlay">
              <h2>Advertising Website</h2>
              <p>
                <a href="https://rass-all.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/e-commerce.png" alt />
            <div className="overlay">
              <h2>E-commerce Website with React and JSON Server</h2>
              <p>
                <a href="https://xprojectx.vercel.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/logistics.png" alt />
            <div className="overlay">
              <h2>Logistics Website</h2>
              <p>
                <a href="https://agt-logistics.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/bloggg.png" alt />
            <div className="overlay">
              <h2>Blog website with Next.js</h2>
              <p>
                <a href="https://melumatlan.vercel.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/124352.png" alt />
            <div className="overlay">
              <h2>Car Advertising Template</h2>
              <p>
                <a href="https://turbo-car.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/blog.png" alt />
            <div className="overlay">
              <h2>Blog Template</h2>
              <p>
                <a href="https://myblogy.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/coffee.png" alt />
            <div className="overlay">
              <h2>Coffee Template</h2>
              <p>
                <a href="https://my-coffeey.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pb-5" data-aos="fade-up">
          <div className="hovereffect">
            <img className src="images/port-6.png" alt />
            <div className="overlay">
              <h2>Election Template</h2>
              <p>
                <a href="https://election-template.netlify.app/">Live Preview</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
