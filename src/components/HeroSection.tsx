// src/pages/Home.tsx
import Navbar from "./Navbar";
import "../style/global.css";
import "../style/Hero.css";
import hero1 from "../assets/hero1.png";
const Hero = () => (
  <>
    <div className="hero">
      <div className="hero-content">
        <Navbar />
        <div className="d-flex flex-wrap container">
          <div className="heroText container col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="colorPrimary">
              Professional Cleaning Services for Hotels and <br /> Furnished
              Apartments
            </h2>
            <h2 className="pt-3" style={{ color: "#676767" }}>
              Expert Cleaning Services Tailored to Your Needs
            </h2>
            <div className="d-flex pt-5 gap-2">
              <button className="text-light w-75 px-5 fs-3 rounded-3 border-3 button">
                Appointment
              </button>
              <button className="w-75 px-5 fs-3 borderOrange rounded-3 border-3 bg-transparent ">
                Call Us
              </button>
            </div>
          </div>
          <div className="hero col-12 col-md-6">
            <img src={hero1} alt="" className="img-fluid d-none d-md-block" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
