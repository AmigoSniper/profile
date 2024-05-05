import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaJava,
  FaGithub,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb, DiMysql, DiPostgresql, DiSqllite } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiMicrosoftsqlserver, SiDart, SiFlutter, SiFirebase } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";

const Skills = ({ skill }) => {
  const icon = {
    HTML: { icon: <FaHtml5 />, title: "HTML" },
    CSS: { icon: <FaCss3 />, title: "CSS" },
    Javascript: { icon: <DiJavascript1 />, title: "Javascript" },
    Bootstrap: { icon: <FaBootstrap />, title: "Bootstrap" },
    Tailwind: { icon: <SiTailwindcss />, title: "Tailwind" },
    React: { icon: <FaReact />, title: "React" },
    Git: { icon: <FaGitAlt />, title: "Git" },
    Github: { icon: <FaGithub />, title: "Github" },
    Java: { icon: <FaJava />, title: "Java" },
    MongoDb: { icon: <DiMongodb />, title: "MongoDb" },
    Express: { icon: <SiExpress />, title: "Express.js" },
    MySql: { icon: <DiMysql />, title: "MySql" },
    SqlLite: { icon: <DiSqllite />, title: "SqlLite" },
    PostgreSql: { icon: <DiPostgresql />, title: "PostgreSql" },
    SSMS: { icon: <SiMicrosoftsqlserver />, title: "SQL Server Management Studio" },
    Dart: { icon: <SiDart />, title: "Dart" },
    Flutter: { icon: <SiFlutter />, title: "Flutter" },
    Firebase: { icon: <SiFirebase />, title: "FireBase" },
    SpringBoot: { icon: <BiLogoSpringBoot />, title: "Java SpringBoot" },
  };

  return (
    <div className="SkillBox">
      <span title={skill}>{icon[skill].icon}</span>
      <span className="SkilTitle">{icon[skill].title}</span>
    </div>
  );
};


export default Skills;
