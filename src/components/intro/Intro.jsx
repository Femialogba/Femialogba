import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={process.env.PUBLIC_URL + "/assets/femialogba.png"}
            alt="femialogba"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Nice to meet you</h2>
          <h1>I'm Femi</h1>
          <h3>
            Some of my interests are:
            <Typewriter
              options={{
                strings: ["Software Engineering", "Machine Learning", "Design"],
                autoStart: true,
                delay: 50,
                loop: true,
              }}
            />
          </h3>
          <div className="links">
            <a href="https://github.com/fmlog">
              <img
                src={process.env.PUBLIC_URL + "/assets/github.svg"}
                alt="github"
              />
            </a>
            <a href="https://linkedin.com/in/femi-alogba-845b97142/">
              <img
                src={process.env.PUBLIC_URL + "/assets/linkedin.svg"}
                alt="linkedin"
              />
            </a>
            <span>femialogba1@gmail.com</span>
          </div>
        </div>
        <a href="#cv">
          <div class="bounce">
            <img
              src={process.env.PUBLIC_URL + "/assets/scroll.svg"}
              alt="scroll pointer"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
