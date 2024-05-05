import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/AmigoSniper" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/amigosniper/" target="_blank">
          <FaInstagram />
        </a>
        <a href="http://wa.me/6285156335252" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/fajar-sapto-mukti-raharjo/" target="_blank">
          <CiLinkedin />
        </a>
        <a href="mailTo:fajarsapto82@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
