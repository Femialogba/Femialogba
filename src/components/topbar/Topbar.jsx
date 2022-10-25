import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Femi Alogba
          </a>
          <div className="itemContainer">
            <span>femialogba1@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <ul className="links">
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#cv">Cv</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
