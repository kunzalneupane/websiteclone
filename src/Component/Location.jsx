import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <>
      <div className="location">
        <h4>Location Details</h4>
        <div className="flex-div">
          <div className="Loc">
            <h6>New Baneshwor Office ,Head Office</h6>
            <h6>Bhairahawa Office</h6>
            <h6>Parsa Office</h6>
            <h6> Nawalparasi Office</h6>
            <h6>Butwal Office</h6>
            <h6> Sydney Office</h6>
            <h6>Narayangarh- Chitwan Office</h6>
            <h6>Tandi Office</h6>
          </div>
          <div className="Locationsec">
            <ul>
              <h6>Putalisadak Office</h6>
              <h6>Birtamode Office</h6>
              <h6>Pokhara Office</h6>
              <h6>Nepalgunj</h6>
              <h6>Srilanka Office</h6>
              <h6>Damak Office</h6>
              <h6>Biratnagar Office</h6>
              <h6>Damauli Office</h6>
            </ul>
          </div>
        </div>
        <div className="Logos">
          <img src="/Logos.webp" alt="the next certified logo" />
        </div>
      </div>
    </>
  );
};

export default Location;
