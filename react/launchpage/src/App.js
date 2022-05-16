// App.js
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionBr from "./components/SectionBr";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />

      <div className="content">

        <Section
          css="section-what-usp"
          badgeTitle="Do you want to"
          compTitle="Learn how to code"
          description="Awesome! Let’s do this together. We are here to support you in
          your coding journey."

          image1URL="https://learntocodetogether.nl/assets/team.svg"
          image1Text="Get help from experienced developers"

          image2URL="https://learntocodetogether.nl/assets/community.svg"
          image2Text="Learn &amp; share with our community"

          image3URL="https://learntocodetogether.nl/assets/personal-speed.svg"
          image3Text="Personal &amp; at your own speed"
          />

        <SectionBr />

        <Section
          css="section-courses-usp"
          badgeTitle="Courses"
          compTitle="Our Courses"
          description="Awesome! Let’s do this together. We are here to support you in
          your coding journey."

          image1URL="https://learntocodetogether.nl/assets/team.svg"
          image1Text="Get help from experienced developers"

          image2URL="https://learntocodetogether.nl/assets/community.svg"
          image2Text="Learn &amp; share with our community"

          image3URL="https://learntocodetogether.nl/assets/personal-speed.svg"
          image3Text="Personal &amp; at your own speed"
          />

        <div className="section section-courses-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Courses</div>
            </div>

            <h2>
              <div className="component-title ">Our Courses</div>
            </h2>

            <div className="description">
              We have created courses to help you learn, with easy to follow
              steps and some sparks of fun!
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                alt=""
                className="image"
                src="https://learntocodetogether.nl/assets/expand-horizon.svg"
              />
              <div className="component-title title">
                Learn new skills and expand your horizon
              </div>
            </div>
            <div className="item team">
              <img
                alt=""
                className="image"
                src="https://learntocodetogether.nl/assets/developers.svg"
              />
              <div className="component-title title">
                Follow courses created by experienced developers
              </div>
            </div>
            <div className="item team">
              <img
                alt=""
                className="image"
                style={{ width: "200px" }}
                src="https://learntocodetogether.nl/assets/step-by-step.svg"
              />
              <div className="component-title title">
                Fun, hands on and easy to follow
              </div>
            </div>
          </div>
        </div>

        <SectionBr />

        <div className="section section-why-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Why?</div>
            </div>

            <h2>
              <div className="component-title ">Why do we do this</div>
            </h2>

            <div className="description">
              It’s really simple actually. We just love to combine our passion
              for code with our love for teaching. Coding is so much fun when
              doing it together.
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                alt=""
                className="image"
                src="https://learntocodetogether.nl/assets/technology.svg"
              />
              <div className="component-title title">Technology</div>
              <div className="description">
                We love to experiment and create awesome stuff from the comfort
                of our couch.
              </div>
            </div>
            <div className="item team">
              <img
                alt=""
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">People</div>
              <div className="description">
                It’s always fun to do things together, the excitement and the
                collaborations.
              </div>
            </div>
            <div className="item team">
              <img
                alt=""
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">Teaching</div>
              <div className="description">
                We like to learn and to teach others the stuff we know.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionBr />

      <Footer />
    </div>
  );
}