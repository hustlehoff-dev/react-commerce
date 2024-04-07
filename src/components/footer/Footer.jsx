import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="column">
          <h3>About</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="column">
          <h3>Categories</h3>
          <ul>
            <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
          </ul>
        </div>
        <div className="column">
          <h3>Useful links</h3>
          <ul>
            <li>FAQ</li>
            <li>Pages</li>
            <li>Regulations</li>
            <li>Refunds</li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact us</h3>
          <ul>
            <li>Contact form</li>
            <li>contact@site.com</li>
            <li>+48 000-000-000</li>
            <li>Wrocław, Poland</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="item"></div>
        <div className="item">
          React Commerce © Copyright 2024 | All rights reserved |
          <a
            href="https://kaczmarekadrian.pl/"
            title="Website creator portfolio"
            className="link"
          >
            &nbsp;Design from ❤️️ by Kaczmarek Adrian KADI
          </a>
        </div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Footer;
