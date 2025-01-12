import React from "react";
import "./First.css";

const First = () => {
  return (
    <>
      <div className="main-div">
        <div className="logosection">
          <img src="/thenextlogo.webp" alt="the next logo" />
        </div>
        <div className="nav-section">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#TestPreparation" className="dropdown-toggle">
                Test Preparation
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#PTE">PTE Preparation Classes</a>
                </li>
                <li>
                  <a href="#IELTS">IELTS Preparation Classes</a>
                </li>
                <li>
                  <a href="#SAT">SAT Preparation Classes</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#services" className="dropdown-toggle">
                Study Abroad
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#Australia">Study in Australia</a>
                </li>
                <li>
                  <a href="#Canada">Study in Canada</a>
                </li>
                <li>
                  <a href="#Newzealand">Study in New Zealand</a>
                </li>
                <li>
                  <a href="#uk">Study in UK</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li className="dropdown">
              <a href="#services" className="dropdown-toggle">
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#student-screening">Student Screening</a>
                </li>
                <li>
                  <a href="#Interview">Interview Assistance</a>
                </li>
                <li>
                  <a href="#scholarship">Scholarship Assistance</a>
                </li>
                <li>
                  <a href="#counseling">Counseling</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Blogs">Blogs</a>
            </li>

            <li className="dropdown">
              <a href="#About" className="dropdown-toggle">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#Introduction">Introduction</a>
                </li>
                <li>
                  <a href="#objectives">Objectives</a>
                </li>
                <li>
                  <a href="#Gallery">Gallery</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#contact" className="dropdown-toggle">
                Contact Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#Inquiry">Inquiry</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Review">Review</a>
            </li>
          </ul>
        </div>
        <div className="rightbtn">
        <a href="https://thenext.edu.np/the-next-admission-day-2025/">The next Scholarship day 2025</a>
        </div>
      </div>
    </>
  );
};

export default First;
