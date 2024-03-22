import style from "./style.module.css";
import prflImage from "../../images/profil/profil.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

//**************************** */

const AboutMe = () => {
  const prflRef = useRef(null);
  const pRef = useRef<HTMLSpanElement[]>([]);
  const itemsRef = useRef<HTMLSpanElement[]>([]);
  //************************** */

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = prflRef.current;
    let ctx = gsap.context(() => {
      gsap.to(el, {
        y: 0,
        stagger: 0.05,
        backgroundColor: "#D27EDB",
        transition: "all 2s ease",
        border: "1px solid #77537A ",
        delay: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemsRef.current,

          start: "top+=100 center",
          end: "bottom+=400 center",
          scrub: true,
        },
      });
      tl.to(itemsRef.current, {
        stagger: 0.1,
        color: "#CF7BD8",
        background: "#0c2d57",
        markers: true,
      }).to(pRef.current, {
        stagger: 0.1,
        color: "#CF7BD8",
        background: "#0c2d57",
        markers: true,
        x: +50,
      });
    });
    return () => ctx.revert();
  }, []);
  //*************************************** */
  const paragraph = `As a seasoned developer specializing in Next.js, React.js, Flutter, and Jetpack Compose,
   I bring a unique blend of versatility and innovation to the table.
    With a strong foundation in these cutting-edge technologies,
     I am passionate about crafting dynamic and immersive digital experiences that
      redefine the way we interact with technology.`;
  const paragraph2 = `Driven by a passion for innovation and a commitment to excellence, I am dedicated to staying at the forefront of emerging technologies and industry trends. Whether it's mastering the latest frameworks or exploring new ways to push the boundaries of mobile and web development, I am constantly evolving and adapting my skillset to deliver cutting-edge solutions that exceed client expectations.
`;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div ref={prflRef} className={style.profil}>
          <img src={prflImage} alt="photo profil" />

          <div className={style.title}>
            <div className={style.name}>Louis Marc Leonard</div>
            <p>
              Together, let's create something extraordinary that not only meets
              but exceeds expectations.
            </p>
          </div>
        </div>

        <div className={style.description}>
          <h2>About Me</h2>
          <p>
            {paragraph.split("").map((letter, index) => {
              return (
                <span
                  ref={(el) => {
                    itemsRef.current[index] = el!;
                  }}
                  className={style.revealText}
                  key={index}
                >
                  {letter}
                </span>
              );
            })}
          </p>

          <p>
            {paragraph2.split("").map((letter, index) => {
              return (
                <span
                  ref={(el) => {
                    pRef.current[index] = el!;
                  }}
                  key={index}
                  className={style.revealText}
                >
                  {letter}
                </span>
              );
            })}
          </p>
          <a href="mailTo:llouismrc2@gmail.com">llouismrc2@gmail.com</a>

          <div className={style.media}>
            <hr />
            <a href="https://github.com/LlMrc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0c2d57"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <a href="https://web.facebook.com/LouisMrcVops">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0c2d57"
                stroke="#0c2d57"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <a href="https://www.linkedin.com/in/louis-marc-leonard-a57a13192/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0c2d57"
                stroke="#0c2d57"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <a href="https://twitter.com/LouisMcLeonard1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0c2d57"
                stroke="#0c2d57"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
