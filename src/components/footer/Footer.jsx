import "./footer.scss";

function Footer() {
  return (
    <footer id="footer" class="footer-social-icons">
      <h4 class="_14">Reach out to me</h4>
      <ul class="social-icons">
        <li>femialogba1@gmail.com</li>
        <li>
          <a href="https://twitter.com/femi_alogba" class="social-icon">
            <i class="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oluwafemi-alogba-845b97142/" class="social-icon">
            <i class="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/fmlog" class="social-icon">
            <i class="fa fa-github" />
          </a>
        </li>
      </ul>
      <h5>Built with React.js</h5>
    </footer>
  );
}

export default Footer;
