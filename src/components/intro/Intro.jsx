import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <a href="#cv">
        <img
          class="bounce"
          src={process.env.PUBLIC_URL + "/assets/scroll.svg"}
          alt="scroll pointer"
        />
      </a>
      <img className="hero" src={process.env.PUBLIC_URL + "/assets/hero-bg.png"} alt="" />
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
          <h3>Nice to meet you</h3>
          <h1>I'm Femi</h1>
          <h3>
            Some of my interests are:
            <Typewriter
              options={{
                strings: ["Software Engineering", "Web development","Design"],
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
        <div className="wrap">
        <div className="summary">
          <h3>Summary</h3>
          <div>
            <h4> Technologies I use</h4>
            <div className="body">
              Python, JavaScript/TypeScript, HTML, CSS, C#, Java, Git, and Linux.
            </div>
          </div>
          <div>
            <h4>Full stack web experience</h4>
            <div className="body">
              <p>Front-end: React.js, Next.js, Angular</p>
              Backend/Full-stack: ASP.NET, Django-REST-framework, Spring, Express.JS
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
