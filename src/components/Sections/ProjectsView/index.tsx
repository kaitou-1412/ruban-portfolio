import React from "react";
import "./index.css";
import Project from "../../Cards/Project";
import FoodHousePic from "../../../media/Food-House.png";
import OMSPic from "../../../media/Mercury-OMS.png";
import VirtualMarathonPic from "../../../media/Virtual-Marathon.png";
import BlogAppPic from "../../../media/Blog-App.png";
import GameOfLifePic from "../../../media/Game-of-Life.png";
import MovieDBPic from "../../../media/MovieDB.png";

const projectsData = [
  {
    title: "Food House",
    image: String(FoodHousePic),
    github: "https://github.com/kaitou-1412/Practice/tree/main/React",
    live: "https://foodhouse.rubansahoo.com",
  },
  {
    title: "Order Management System",
    image: String(OMSPic),
    github: "",
    live: "https://oms-frontend-urtjok3rza-wl.a.run.app",
  },
  {
    title: "Virtual Marathon",
    image: String(VirtualMarathonPic),
    github: "",
    live: "https://vertualmarathon-frontend-urtjok3rza-wl.a.run.app",
  },
  {
    title: "Blog App",
    image: String(BlogAppPic),
    github: "https://github.com/kaitou-1412/react-blog",
    live: "https://focused-benz-36b4d0.netlify.app/",
  },
  {
    title: "Game of Life",
    image: String(GameOfLifePic),
    github: "https://github.com/kaitou-1412/Game-of-Life",
    live: "https://boring-euclid-f5a2f6.netlify.app/",
  },
  {
    title: "MovieDB",
    image: String(MovieDBPic),
    github: "https://github.com/kaitou-1412/MovieDB",
    live: "https://friendly-knuth-1c2e7b.netlify.app/",
  },
];

const ProjectsView = () => {
  return (
    <div className="projects-view-container">
      <div className="projects-view-title">My Latest Projects</div>
      <div className="projects-view-description">
        Building apps, not just for the sake of learning but also because it's a
        lot of fun!
      </div>
      <div className="projects-view">
        {projectsData.map((project, index) => (
          <Project
            key={index + 1}
            id={index + 1}
            image={project.image}
            title={project.title}
            github={project.github}
            live={project.live}
          />
        ))}
        {/* {projectsData.length % 3 === 1 ? (
          <>
            <Project
              key={0}
              id={0}
              title={""}
              image={""}
              github={""}
              live={""}
            />
            <Project
              key={0}
              id={0}
              title={""}
              image={""}
              github={""}
              live={""}
            />
          </>
        ) : projectsData.length % 3 === 2 ? (
          <Project key={0} id={0} title={""} image={""} github={""} live={""} />
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default ProjectsView;
