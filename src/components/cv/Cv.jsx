import "./cv.scss";

export default function cv() {
  return (
    <div className="cv" id="cv">
      <a href="#projects">
        <div class="bounce">
          <img
            src={process.env.PUBLIC_URL + "/assets/scroll.svg"}
            alt="scroll pointer"
          />
        </div>
      </a>
      <div className="education section">
        <h1>Education</h1>
        <table>
          <tr>
            <th>University</th>
            <th>Degree</th>
            <th>Graduated</th>
          </tr>
          <tr>
            <td>Swansea University</td>
            <td>Master's in Computer science</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>University of Lagos</td>
            <td>Bachelor of Science in Civil Engineering </td>
            <td>2018</td>
          </tr>
        </table>
      </div>

      <div class="skills section">
        <h1>Technical Skills</h1>
        <h2>Languages</h2>
        <div className="list">
          <div>
            {" "}
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/python.svg"} alt="" />
          <div className="text">Python</div>

          <img src={process.env.PUBLIC_URL + "/assets/java.svg"} alt="" />
          <div className="text">Java</div>

          <img src={process.env.PUBLIC_URL + "/assets/js.svg"} alt="" />
          <div className="text">Javascript</div>

          <img src={process.env.PUBLIC_URL + "/assets/html5.svg"} alt="" />
          <div className="text">HTML</div>
        </div>
        <h2>Design Tools</h2>
        <div className="list">
          <div>
            {" "}
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/ai.svg"} alt="" />
          <div className="text">Illustrator</div>

          <img src={process.env.PUBLIC_URL + "/assets/id.svg"} alt="" />
          <div className="text">InDesign</div>

          <img src={process.env.PUBLIC_URL + "/assets/ae.svg"} alt="" />
          <div className="text">After Effects</div>

          <img src={process.env.PUBLIC_URL + "/assets/xd.svg"} alt="" />
          <div className="text">Adobe XD</div>
        </div>
      </div>
      <div className="education section">
        <h1>Work Experience</h1>
        <table >
          <tr>
            <th>Organisation</th>
            <th>Role</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td> <a href="https://sedmichael.com"> Sed Michael Design </a></td>
            <td>Designer and Founder</td>
            <td>2021 - 2022</td>
          </tr>
          <tr>
            <td>BAT Lagos Office</td>
            <td>Communications designer</td>
            <td>2019 - 2021</td>
          </tr>
          <tr>
            <td>Relatables Consulting</td>
            <td>Communications designer</td>
            <td>2019 - 2020</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
