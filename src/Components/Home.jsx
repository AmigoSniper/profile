import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {

  const [timeCategory, setTimeCategory] = useState('');

  useEffect(() => {
    const getTimeCategory = () => {
      const getHours = new Date().getHours();
      let category = '';
      if (getHours >= 0 && getHours < 6) {
        category = 'Malam';
      } else if (getHours >= 6 && getHours < 10) {
        category = 'Pagi';
      } else if (getHours >= 10 && getHours < 14) {
        category = 'Siang';
      } else if (getHours >= 14 && getHours < 18) {
        category = 'Sore';
      } else {
        category = 'Malam';
      }

      return category;
    }

    setTimeCategory(getTimeCategory());

  });


  return (
    <div id={'Home'}>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Halo Selamat {timeCategory}</h1>
          <h1>
            I'M <b>Fajar Sapto Mukti Raharjo</b>
          </h1>
          <Type />
          <Link to="#About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt gyroscope={true} glareEnable={true} glareMaxOpacity={1} glareColor="#ffffff" glareBorderRadius="1">
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
