import "./cv.scss";
const skills = [

]

export default function cv() {
  return (
    <div className="cv" id="cv">

      <div className="education section">
        <h4>Education</h4>
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
      <div className="education section">
        <h4>Work Experience</h4>
        <table>
          <tr>
            <th>Organisation</th>
            <th>Role</th>
            <th>Duration</th>
          </tr>
          <tr>
            <td>
              {" "}
              <a href="https://sedmichael.com"> Sed Michael Design </a>
            </td>
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
      <h4 className="education section">Browse some of my projects below</h4>
      <a href="#projects">
        <img
          class="bounce"
          src={process.env.PUBLIC_URL + "/assets/scroll.svg"}
          alt="scroll pointer"
        />
      </a>
    </div>
  );
}
