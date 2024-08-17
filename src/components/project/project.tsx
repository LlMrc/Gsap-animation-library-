import style from "./style.module.css";
import project1 from "../../images/project/platform.png";
import project2 from "../../images/project/store.png";
import project3 from "../../images/project/drive.jpeg";
import project4 from "../../images/project/mui.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    title: "web platform",
    src: project1,
    link: "https://masha-plus-startup.vercel.app/",
  },

  {
    title: "Ecommerce",
    src: project2,
    link: "https://mash-demo-llmrc.vercel.app/",
  },

  {
    title: "Android apps",
    src: project3,
    link: "https://play.google.com/store/apps/details?id=com.mash.drive_share",
  },

  {
    title: "web template",
    src: project4,
    link: "https://mashpa.vercel.app/",
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
    <div className={style.wrapper} data-scroll-section>
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
              <h2>
                <a href={project.link} target="_blank">
                  {project.title}
                </a>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
