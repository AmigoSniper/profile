import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const projectsData = [
    {
      nama: "AccountManager",
      title: "Account Manager",
      desc: "Aplikasi Account Manager adalah aplikasi seluler yang digunakan untuk menyimpan nama pengguna dan email game secara aman secara offline menggunakan database lokal dengan sqlite.",
      github: "https://github.com/AmigoSniper/account-manager",
      gambar: [
        "src/images/GIF-240823_091339.gif"
      ],
    },
    {
      nama: "isPolindrome",
      title: "isPolindrome",
      desc: "Aplikasi ini hanya dibuat untuk melakukan check apakah kata-kata yang dimasukkan termasuk palindrome atau tidak sekaligus untuk test check API di flutter.",
      github: "https://github.com/AmigoSniper/isPolindrome",
      gambar: ["src/images/GIF-240823_083051.gif"],
    },
    {
      nama: "FirebaseCrud",
      title: "Firebase CRUD",
      desc: "Aplikasi ini hanya dibuat untuk melakukan CRUD dengan database cloud yaitu Firebase.",
      github: "https://github.com/AmigoSniper/Mahasiswa-simple-flutter-form-with-firebase",
      gambar: [
        "src/images/GIF-240823_094359.gif",
      ],
    },
    {
      nama: "FlashPhoint",
      title: "FlashPhoint",
      desc: "FlashPhoint adalah aplikasi Point of Sale (POS) modern yang membantu bisnis dalam mengelola penjualan, inventaris, promosi, serta manajemen pegawai secara efisien dan terintegrasi.",
      github: "https://github.com/AmigoSniper/flashpoint",
      gambar: [
        "src/images/Flashpoint/flashpoint1.png",
        "src/images/Flashpoint/flashpoint2.png",
        "src/images/Flashpoint/flashpoint3.png",
        "src/images/Flashpoint/flashpoint13.png",
        "src/images/Flashpoint/flashpoint4.png",
        "src/images/Flashpoint/flashpoint5.png",
        "src/images/Flashpoint/flashpoint6.png",
        "src/images/Flashpoint/flashpoint7.png",
        "src/images/Flashpoint/flashpoint8.png",
        "src/images/Flashpoint/flashpoint9.png",
        "src/images/Flashpoint/flashpoint10.png",
        "src/images/Flashpoint/flashpoint11.png",
        "src/images/Flashpoint/flashpoint12.png",
      ],
    },
  ];

  return (
    <div id="Projects" className="ProjectsPage">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {projectsData.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
