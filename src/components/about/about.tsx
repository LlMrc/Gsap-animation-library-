import style from "./style.module.css";
import prflImage from "../../images/profil/profil.jpg";
import gsap from "gsap";

import { useEffect, useLayoutEffect, useRef } from "react";

//**************************** */

const AboutMe = () => {
  const profilRef = useRef(null);
  const dsc = useRef(null);
  //************************** */

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        profilRef.current,
        {
          transition: "all 0.9s ease",
        },
        {
          backgroundColor: "#CF7BD8",
          transition: "all 2s ease",
        }
      );
    });
    return ctx.clear();
  }, []);
  //*************************************** */

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div ref={profilRef} className={style.profil}>
          <img src={prflImage} alt="photo profil" />

          <div className={style.title}>
            <div className={style.name}>Louis Marc Leonard</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ab.
            </p>
          </div>
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
