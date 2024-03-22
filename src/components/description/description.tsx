import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import style from "./style.module.css";

interface Props {
  description: String;
}

function Description({ description }: Props) {
  const introRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(
        introRef.current,

        {
          duration: 1,
          delay: 0.3,
          x: 0,
          opacity: 1,

          scrollTrigger: {
            trigger: introRef.current,
            start: "top bottom-=100",
            toggleActions: "restart pause none none",
          },
        }
      );
    }, []);
    return () => ctx.revert();
  }, []);
  return (
    <p className={style.paragraph} ref={introRef}>
      {description}
    </p>
  );
}

export default Description;
