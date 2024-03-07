import style from "./style.module.css";
import project1 from "../../images/project/1.jpeg";
import project2 from "../../images/project/2.jpeg";
import project3 from "../../images/project/3.webp";
import project4 from "../../images/project/4.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Salar de Atacama",
    src: project1,
  },

  {
    title: "Valle de la luna",
    src: project2,
  },

  {
    title: "Miscanti Lake",
    src: project3,
  },

  {
    title: "Miniques Lagoons",
    src: project4,
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "top+=200px",
      end: "bottom+=400px bottom",
      pin: true,
      markers: true,
    });
  }, []);

  return (
    <div ref={container} className={style.wrapper}>
      <div className={style.projectContainer}>
        <div ref={imageContainer} className={style.imageDescription}>
          <img src={`${projects[selectedProject].src}`} alt="project image" />
        </div>
        <div className={style.column}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={style.column}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className={style.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={style.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
