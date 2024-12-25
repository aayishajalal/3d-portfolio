import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";
//reusable - infoBox and renderContent object
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Aayisha Noora J</span>👋
      <br />
      Full Stack Developer & DevOps Enthusiast
      <br />
      Crafting meaningful digital experiences
    </h1>
  ),
  2: (
    <InfoBox
      text="Expert in MERN stack, passionate about DevOps practices, and skilled in Dockerization. I’ve worked on many real-time projects."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Designed 20+ screens for Arca Clinic and developed Altapulse’s dynamic website with Dockerized environments."
      link="/projects"
      btnText="See My Work"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a Full stack Developer or a DevOps enthusiast to bring your project to life? Let’s make it happen!"
      link="/contact"
      btnText="Get In Touch"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
