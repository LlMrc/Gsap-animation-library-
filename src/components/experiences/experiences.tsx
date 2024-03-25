import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import arrowLeft from "../../images/icon/arrow-left.svg";
import arrowRight from "../../images/icon/arrow-right.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import itemData from "../data/data";
import Description from "../description/description";

function Experiences() {
  const contentRef = useRef(null);

  const [items, setItems] = useState(itemData);
  const slideRef = useRef<HTMLDivElement>(null);

  //+++++++++++++++++++++++++++++++++++ ANIMATION +++++++++++++++++++++++++

  useLayoutEffect(() => {
    const el = contentRef.current;
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause none none",
        },
      });
      t1.to(["#name", "#desc", "#btn"], {
        stagger: 0.1,
        y: 0,
        opacity: 1,
        delay: 1,
        filter: "blur(0)",
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const onNextClick = () => {
    setItems((prevItems) => {
      if (prevItems.length <= 1) {
        return prevItems;
      }
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      if (firstItem) {
        updatedItems.push(firstItem);
      }
      return updatedItems;
    });
  };
  const onPrevClick = () => {
    setItems((prevItems) => {
      if (prevItems.length <= 1) {
        return prevItems;
      }
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      if (lastItem) {
        updatedItems.unshift(lastItem);
      }
      return updatedItems;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextClick(); // Call onNextClick every 10 seconds
    }, 30000); // 10 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section >
      <Intro />
      <div
        className={styles.wrapper}
        data-scroll
        data-scroll-section
        data-scroll-speed="0.5"
      >
        <div className={styles.container} ref={contentRef}>
          <div className={styles.slide} ref={slideRef}>
            {items.map((el, index) => (
              <div
                className={styles.item}
                style={{
                  backgroundImage: el.image,
                }}
                key={index}
              >
                <div className={styles.content}>
                  <div id={"name"} className={styles.name}>
                    {el.title}
                  </div>
                  <div id={"desc"} className={styles.des}>
                    {el.description}
                  </div>
                  <button id={"btn"}>
                    <a href={el.link} target="blank">
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <button className={styles.preview} onClick={onPrevClick}>
              <img src={arrowLeft} alt="preview" />
            </button>
            <button className={styles.next} onClick={onNextClick}>
              <img src={arrowRight} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h2>My Experiences</h2>
      <Description
        description={` Over the course of my career, I have had the opportunity to work on
        various projects and gain valuable skills 👴. Here's a look at some of my
        experiences:`}
      />
    </div>
  );
};
