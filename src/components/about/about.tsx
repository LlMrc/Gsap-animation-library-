import style from "./style.module.css";
import prflImage from "../../images/profil/profile.jpg";
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
        backgroundColor: "#EB9271",
        transition: "all 2s ease",

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
        color: "#ff7f50",
        background: "#0c2d57",
      }).to(pRef.current, {
        stagger: 0.1,
        color: "#FF7F50",
        background: "#0c2d57",

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
    <div className={style.wrapper} data-scroll data-scroll-section>
      <div className={style.container}>
        <div ref={prflRef} className={style.profil}>
          <img src={prflImage} alt="photo profil" />

          <div className={style.title}>
            <div className={style.name}>Louis Marc Leonard</div>
            <p>
              Together, let's create something extraordinary that not only meets
              but exceeds expectations.
            </p>
            <a href="https://lml-creative.vercel.app/">Our Services – Visit our Website Today 👉</a>
          </div>
        </div>

        <div className={style.description}>
          <h2>About Me</h2>
          <div className={style.paragraph}>
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
          </div>
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

            <a href="https://play.google.com/store/apps/dev?id=5352759552017891252">
              <svg fill="#0c2d57" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5_logos</title><path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z"></path><path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z"></path><path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z"></path><path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z"></path></g></svg>
            </a>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            <a href="https://www.linkedin.com/in/louis-marc-leonard-a57a13192/">
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
                stroke="currentColor"
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
