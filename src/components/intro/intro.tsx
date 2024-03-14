import style from "./style.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

interface Props {
  myStringArray: string[];
}

function Intro() {
  const text = useRef(null);
  //description
  const description: string[] = [
    "Lorem Ipsum has been the industry's standard",
    "when an unknown printer took a galley of",
    "but also the leap into electronic typesetting",
    "when an unknown printer took a galley of",
    "but also the leap into electronic typesetting",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "10px bottom",
        end: "bottom+=330px bottom",
      },
    });
    t.from(text.current, { left: "-200px", opacity: 0, fontSize: "0vw" }).to(
      text.current,
      { left: "+200px", opacity: 1, fontSize: "2vw" },
      0
    );
  }, []);

  return (
    <div ref={text} className={style.intro}>
      <AnimatedText myStringArray={description} />
    </div>
  );
}

export default Intro;

//Iterable text
const AnimatedText: React.FC<Props> = ({ myStringArray }) => {
  //********************************* */

  return (
    <>
      {myStringArray.map((item: string, index) => (
        <p
          // data-scroll
          // data-scroll-direction="horizontal"
          // data-scroll-offset="100, 45%"
          key={index}
        >
          {item}
        </p>
      ))}
    </>
  );
};
