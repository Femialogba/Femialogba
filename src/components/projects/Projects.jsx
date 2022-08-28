import { useState } from "react";
import "./projects.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "/assets/github.svg",
      title: "Autograder",
      desc: "For my dissertation, I developed a RESTful Autograder web application (automatic grading of programming assignment using test cases) that can be integrated into LMS (e.g., Canvas) using REST API.",
      img: "/assets/autograder.png",
      link: "https://github.com/fmlog/Autograder-v2",
    },
    {
      id: "2",
      icon: "/assets/github.svg",
      title: "Autograder2",
      desc: "For my dissertation, I developed a RESTful Autograder web application (automatic grading of programming assignment using test cases) that can be integrated into LMS (e.g., Canvas) using REST API.",
      img: "/assets/autograder.png",
      link: "https://github.com/fmlog/Autograder-v2",
    },
    {
      id: "3",
      icon: "/assets/github.svg",
      title: "Autograder3",
      desc: "For my dissertation, I developed a RESTful Autograder web application (automatic grading of programming assignment using test cases) that can be integrated into LMS (e.g., Canvas) using REST API.",
      img: "/assets/autograder.png",
      link: "https://github.com/fmlog/Autograder-v2",
    },
  ];
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="projects" id="projects">
      <a href="#intro">
        <div class="bounce">
          <img
            src={process.env.PUBLIC_URL + "/assets/scroll.svg"}
            alt="scroll pointer"
          />
        </div>
      </a>
      <div className="title">Personal Projects</div>
      <div
        className="slider"
        style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <a href={d.link}>
                      <img src={process.env.PUBLIC_URL + d.icon} alt="" />
                    </a>
                  </div>
                  <h2>
                    <a href={d.link}>{d.title}</a>
                  </h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={process.env.PUBLIC_URL + d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.svg"}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.svg"}
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
}
