import React from "react";

function Footer() {
  return (
    <div class="social-footer">
      <div class="social-footer-left">
        <a href="#intro">
          <h4 class="logo"></h4>
        </a>
      </div>
      <div class="social-footer-icons">
        <ul class="menu simple">
          <li>
            <a href="https://www.github.com/">
              <i
                class="fa fa-facebook"
                src={process.env.PUBLIC_URL + "/assets/github.svg"}
              ></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/?hl=en">
              <i
                class="fa"
                src={process.env.PUBLIC_URL + "/assets/linkedin.svg"}
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=en">
              <img
                class="fa"
                src={process.env.PUBLIC_URL + "/assets/twitter.svg"}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
