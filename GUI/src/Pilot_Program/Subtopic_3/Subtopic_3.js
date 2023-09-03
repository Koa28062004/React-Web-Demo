import React from "react";
import './Subtopic_3.css';
import Footer from "../../Footer/Footer";
import Tool from "../../Tool/Tool";
import SDGslogo from "../../SDGs_Page/SDGs_Setup/SDGs_logo";

const Videos = [
  {
    id: "1",
    title: "Meeting 1",
    className: "M",
    source: "https://drive.google.com/file/d/1sN-XPPQ44--DFJGY949Ua06R8Izbln2H/preview",
  },
  {
    id: "2",
    title: "Meeting 2",
    className: "M",
    source: "https://drive.google.com/file/d/1uw56krHZ0uVB3u07mX6mX0vI4E98VS1J/preview"
  },
  {
    id: "3",
    title: "Meeting 3",
    className: "M",
    source: "https://drive.google.com/file/d/1_o3t_xDpebyNy9uYZcPnY2BKtS0AtK1h/preview"
  },
  {
    id: "4",
    title: "Meeting 4",
    className: "M",
    source: "https://drive.google.com/file/d/1ElmLlOoN17pg_t-CgcVz31rOHGHUhfXY/preview"
  },
  {
    id: "5",
    title: "Meeting 5",
    className: "M",
    source: "https://drive.google.com/file/d/1k1Lk0W6lVZBUMB5LGge5_k0Mv-1Bs6fJ/preview"
  }
];

function ProjectVideos() {
  return (
    <div className="Videos_body">
      <Tool />
      <SDGslogo />
      <div className="Videos">
        {Videos.map((item) => (
          <div key={item.id} className="video-container">
            <iframe
              src={item.source}
              allow="autoplay"
              title={`Video - ${item.title}`}
              className="driveLink"
            ></iframe>
            <div className="title">{item.title}</div> {/* Display the title below the video */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectVideos;