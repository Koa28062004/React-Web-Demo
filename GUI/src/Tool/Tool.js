import React from "react";
import SetUpTool from "./Set_up_tool";
import "./Tool.css"
import { Link } from "react-router-dom";
const programData = [
  {
    name: "Members",
    details: [
      {
        name: "Member 1",
        link:"#"
      }, 
      {
        name:"Member 2",
        link:"#"
      },
      {
        name:"More...",
        link:"#"
      }
    ],
  },
  {
    name: "Pilot Program",
    details: [
      {
        name: "Subtopic 1",
        link:"/Pilot_Program/Subtopic_1"
      }, 
      {
        name:"Subtopic 2",
        link:"/Pilot_Program/Subtopic_2"
      },
      {
        name:"Subtopic 3",
        link:"#"
      }
    ],
  },
  {
    name: "Project",
    details: [
      {
        name: "Project 1",
        link:"#"
      }, 
      {
        name:"Project 2",
        link:"#"
      },
      {
        name:"More...",
        link:"#"
      }
    ]
  },
];

function DropdownContent({ title }) {
  if (title === "Event")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  if (title === "Competition")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
  if (title === "Program")
    return (
      <div className="dropdown-content">
        {programData.map((program, index) => (
          <div key={index}>
            <div className="i_dropdown">
              <div className="i_dropdownname">{program.name}</div>
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
  if (title === "About Us")
    return(
      <div className="dropdown-content">
        <Link to="/About_us" >About Us</Link>
      </div>
    );
  if (title === "Project Partners")
    return (
      <div className="dropdown-content">
        <a href="https://www.youtube.com/" title="">
          Youtube
        </a>
      </div>
    );
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
      <Link to="/" className="logo"><img  alt="" src={require("../Homepage/Images/logo.png")} /></Link>
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

function Search() {
  return (
    <div className="search">
      <input className="input" type="search" name="" placeholder="Search..." />
      <button className="ser"><i class="fa-solid fa-magnifying-glass"></i></button>
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
