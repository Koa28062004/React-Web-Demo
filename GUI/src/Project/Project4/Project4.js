import React, { useState } from "react";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";
import Footer from "../../Footer/Footer";
import Tool,{Tool_mobile} from "../../Tool/Tool";
import "./Project4.css";
import { Search_mobile } from "../../Tool/Search";
const currentYear = new Date().getFullYear();
const Teammate2Data = [
  {
    name: "Janya",
    img: "./Img/rashi.JPG",
    age: currentYear - 2006,
    Nationality: "Indian",
    Education: "Senior (KIS International School, Thailand)",
  },
  {
    name: "Tran Kim Chau",
    img: "./Img/rashi.JPG",
    age: currentYear - 2006,
    Nationality: "Vietnam",
    Education: "Senior (BVIS - British Vietnamese International School HCMC, Vietnam)",
  },
];

const Project4 = () => {
  const [currentImageType, setCurrentImageType] = useState("Linh");
  const [showPDF, setShowPDF] = useState(false);
  const [TypeContent, setTypeContent] = useState(`./Infographic - SHEIN.pdf`);
  const togglePDF = (content) => {
    if (content === "Infog") {
      setTypeContent(`#`);
    }
    if (content === "Presentation") {
      setTypeContent(`#`);
    }
    setShowPDF(!showPDF);
  };
  return (
    <div className="Project4_body">
      {showPDF && (
        <iframe
          className="pdf_project"
          src={require(`${TypeContent}`)}
          width="100%"
          height="1000px"
          title="PDF Viewer"
        />
      )}
      <Tool />
      <Tool_mobile />
      <Search_mobile />
      <SDGslogo />
      <div className="Project4_main">
        <div className="Teammate_profile">
          <h1>Teammate profile</h1>
          <div className="profiles">
            {Teammate2Data.map((member, index) => (
              <div className="profile" key={index}>
                <div className="profile_img">
                  <img src={require(`${member.img}`)} alt=""></img>
                </div>
                <div className="name_teammate">
                  Name: {member.name}
                  <i
                    className="fa-solid fa-circle-info"
                    onClick={() => setCurrentImageType("Rashi")}
                  ></i>
                </div>
                <div className="profile_main">
                  <p>Age: {member.age}</p>
                  <p>Nationality: {member.Nationality}</p>
                  <p>Education: {member.Education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <Footer />
      </div>
    </div>
  );
};

export default Project4;
