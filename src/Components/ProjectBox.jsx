import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.gambar.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [project.gambar]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="projectBox">
      <div className="ImgBox" style={{ textAlign: "center" }}>
        <img
          src={project.gambar[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "70%", height: "70%", cursor: "pointer" }}
        />
        <div style={{ marginTop: "10px" }}>
          {project.gambar.map((_, index) => (
            <span
              key={index}
              onClick={() => handleImageClick(index)}
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                margin: "0 5px",
                backgroundColor: currentIndex === index ? "#333" : "#ccc",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></span>
          ))}
        </div>
      </div>

      <div>
        <br />
        <h3>{project.title}</h3>
        <br />
        {project.desc}
        <br />
        <div className="ButtonBox">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
