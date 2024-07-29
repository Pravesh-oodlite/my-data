import React from "react";
import {
  StyleFooterFooterWrapper,
  StyleFooterHeaderWrapper,
  StyleFooterMiddleWrapper,
} from "../../styles/FooterStyles";
import { Tabs } from "antd";
import { ITEMS } from "../../constants";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";

const FooterSection = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <StyleFooterHeaderWrapper>
        <h1>Inspiration for future getaways</h1>
        <div className="getaways-titles">
          <Tabs defaultActiveKey="1" items={ITEMS} onChange={onChange} />
        </div>
      </StyleFooterHeaderWrapper>
      <StyleFooterMiddleWrapper>
        <div>
          <section>
            <h4>Support</h4>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">AirCover</a>
            </li>
            <li>
              <a href="#">Anti-discrimination</a>
            </li>
            <li>
              <a href="#">Disabiaty support</a>
            </li>
            <li>
              <a href="#">Cancellation options</a>
            </li>
            <li>
              <a href="#">Report neighbourhood concern</a>
            </li>
          </section>
          <section>
            <h4>Hosting</h4>
            <li>
              <a href="#">Airbnb your home</a>
            </li>
            <li>
              <a href="#">AirCover for Hosts</a>
            </li>
            <li>
              <a href="#">Hosting resources</a>
            </li>
            <li>
              <a href="#">Community forum</a>
            </li>
            <li>
              <a href="#">Hosting responsibly</a>
            </li>
            <li>
              <a href="#">Join a free Hosting class</a>
            </li>
          </section>
          <section>
            <h4>Airbnb</h4>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">New features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Airbnb.org emergency stays</a>
            </li>
          </section>
        </div>
        <div className="footer-section">
          <div className="footer-container">
            <div>
              <span>© 2024 Airbnb, Inc.</span>
              <span>
                <span className="dot">
                  <span>.</span>
                </span>
                <span className="content">
                  <a href="#">Privacy</a>
                </span>
                <span className="dot">
                  <span>.</span>
                </span>
                <span className="content">
                  <a href="#">Terms</a>
                </span>
                <span className="dot">
                  <span>.</span>
                </span>
                <span className="content">
                  <a href="#">Sitemap</a>
                </span>
                <span className="dot">
                  <span>.</span>
                </span>
                <span className="content">
                  <a href="#">Company details</a>
                </span>
              </span>
            </div>
            <div>
              <button className="first-division">
                <img src="/icons/globe-icon.png" alt="globe icon" />
                <span>English(IN)</span>
              </button>
              <button className="second-division">
                <span>₹</span>
                <span>INR</span>
              </button>
              <ul className="third-division">
                <a href="#">
                  <IoLogoFacebook />
                </a>
                <a href="#">
                  <AiFillTwitterSquare />
                </a>
                <a href="#">
                  <FaSquareInstagram />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </StyleFooterMiddleWrapper>
      {/* <StyleFooterFooterWrapper>
        <div></div>
      </StyleFooterFooterWrapper> */}
    </>
  );
};

export default FooterSection;
