import React from "react";
import SetUpTool from "./Set_up_tool";
import "./Tool.css";
import { Link } from "react-router-dom";
import Search from "./Search";

const AboutusData = [
  {
    name: "About Us",
    link: "/About_us",
  },
  {
    name: "Core Team",
    link: "/About_us/Core_Team",
  },
];
const programData = [
  {
    name: "Pilot Program",
    details: [
      {
        name: "Project 1",
        link: "/Pilot_Program/Project_1",
      },
      {
        name: "Project 2",
        link: "/Pilot_Program/Project_2",
      },
      {
        name: "Project 3",
        link: "#",
      },
    ],
  },
  {
    name: "Project",
    details: [
      {
        name: "Project",
        link: "/Project",
      },
      {
        name: "Video Project",
        link: "#",
      },
    ],
  },
];

function DropdownContent({ title }) {
  if (title === "Event") {
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
<<<<<<< HEAD
  }
  if (title === "Competition") {
    return <div className="dropdown-content">Coming soon</div>;
  }
  if (title === "Program") {
=======
  if (title === "Competition")
    return (
      <div className="dropdown-content">
       <p>Coming soon</p> 
      </div>
    );
  if (title === "Program")
>>>>>>> 578b464e915f508d11bae2bdb6ebff95c1aaf4a7
    return (
      <div className="dropdown-content">
        {programData.map((program, index) => (
          <div key={index}>
            <div className="i_dropdown">
              <div className="i_dropdownname">
                {program.name} <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div className="i_dropdown-content">
                {program.details.map((item, itemIndex) => (
                  <Link to={item.link} key={itemIndex} className="i_content">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (title === "About Us") {
    return (
      <div className="dropdown-content">
        {AboutusData.map((program, index) => (
          <div key={index}>
            <Link to={program.link}>{program.name}</Link>
          </div>
        ))}
      </div>
    );
  }
  if (title === "Project Partners") {
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  }
}

function Dropdown({ title }) {
  return (
    <div className="dropdown">
      {title}
      <DropdownContent title={title} />
    </div>
  );
}

function Navigation() {
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img alt="" src={require("../Homepage/Images/logo.png")} />
      </Link>
      <div className="ull">
        <Dropdown title="Event" />
        <Dropdown title="Competition" />
        <Dropdown title="Program" />
        <Dropdown title="About Us" />
        <Dropdown title="Project Partners" />
      </div>
    </div>
  );
}

function Tool() {
  return (
    <div className="tool">
      <Navigation />
      <Search />
      <SetUpTool />
    </div>
  );
}

export default Tool;
