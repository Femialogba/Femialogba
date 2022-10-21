import { useState } from "react";
import { projects } from "../../data";
import "./projects.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projects.length - 1
        )
      : setCurrentSlide(
          currentSlide < projects.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
      >
        {projects.map((d) => (
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
