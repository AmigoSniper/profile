import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import Type from "./Type.jsx";
const About = () => {
  return (
    <>
      <div className="AboutPage" id={'About'}>
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Tentang Saya
          </h1>
          <p >
            Hi, Nama saya adalah <b>Fajar Sapto Mukti Raharjo</b>.Saya adalah mahasiswa aktif dari <b>Politeknik Negeri Malang</b>, yang sedang menyelesaikan program <b>D3 Teknologi Informasi</b>.Selain fokus pada studi, saya juga aktif dalam organisasi HMTI (Himpunan Mahasiswa Teknologi Informasi), di mana saya terlibat dalam mengasah keterampilan kepemimpinan, kolaborasi, dan komunikasi.
            <br />
            <br />
            Saya adalah seseorang yang <b>senang dengan tantanga</b>n. Saya mudah beradaptasi dengan lingkungan baru dan senang mempelajari hal-hal baru terutama dalam <b>bidang teknologi</b>. Saya memiliki tanggung jawab besar dan mampu bekerja dalam segala kondisi. Ketika menghadapi masalah, saya mampu berpikir dengan jernih sebelum menemukan solusinya.
          </p>
          {/* <a href="Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a> */}
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Java" />
        <Skills skill="SpringBoot" />
        <Skills skill="MongoDb" />
        <Skills skill="Express" />
        <Skills skill="MySql" />
        <Skills skill="SqlLite" />
        <Skills skill="PostgreSql" />
        <Skills skill="SSMS" />
        <Skills skill="Firebase" />
        <Skills skill="Dart" />
        <Skills skill="Flutter" />
        <Skills skill="Git" />
        <Skills skill="Github" />
      </div>
    </>
  );
};

export default About;
