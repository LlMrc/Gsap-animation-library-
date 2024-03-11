import style from "./style.module.css";
import profil from "../../images/profil/profil.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const AboutMe = () => {
  const wrapper = useRef(null);
  const descriptionContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: wrapper.current,
      start: "top+=60px top",
      end: "bottom-=50px  bottom",
    });
  }, []);

  return (
    <div ref={wrapper} className={style.wrapper}>
      <div className={style.container}>
        <div className={style.profil}>
          <img src={profil} alt="photo profil" />

          <div className={style.name}>Louis Marc Leonard</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ab.
          </p>
        </div>
        <div className={style.description}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias
            reiciendis atque error optio voluptatem, sint dolorem necessitatibus
            non. Animi fugiat libero sapiente fugit cum culpa soluta, deserunt
            rerum quidem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
