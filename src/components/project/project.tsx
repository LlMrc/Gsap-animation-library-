import style from "./style.module.css";
import project1 from "../../images/project/1.png";
import project2 from "../../images/project/2.png";
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
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    const el = imageContainer.current;
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top+=50",
        end: "bottom+=200 top+=100",
        pin: true,

        toggleActions: "restart pause none none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.projectContainer}>
        <div ref={imageContainer} className={style.imageContainer}>
          <img src={`${projects[selectedProject].src}`} alt="project image" />
        </div>

        <div className={style.column}>
          <p>
            Whether you're here to explore my work, seek inspiration, or
            collaborate on a project, I invite you to immerse yourself in the
            world of front-end development.
          </p>
        </div>
        <div className={style.column}>
          <p>
            From responsive websites to interactive web applications, I've
            embraced the ever-evolving landscape of front-end development. With
            a keen eye for design and a commitment to usability, I strive to
            create seamless experiences that resonate with users across devices
            and platforms.
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
