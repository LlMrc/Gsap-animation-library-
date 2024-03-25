import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import web from "../../images/icon/web.svg";
import mobile from "../../images/icon/devices.svg";
import network from "../../images/icon/network.svg";
import gsap from "gsap";

interface Prop {
  title: String;
  desc: String;
  src: string;
}

const Testimonial = () => {
  return (
    <div className={styles.testiWrapper} data-scroll data-scroll-speed="0.4">
      <div>
        <Expert
          title={`Mobile developement`}
          desc={`Dive into the world of mobile application development with Flutter & jetpack Compose, where my expertise shines in crafting dynamic and intuitive user experiences across iOS and Android platforms. With a robust foundation in Flutter's versatile framework, I excel in architecting and implementing feature-rich applications that seamlessly blend stunning visuals with seamless functionality.`}
          src={mobile}
        />
      </div>
      <div>
        <Expert
          title={`Web developement`}
          desc={`Embark on a journey through the digital realm with a web developer seasoned in the art of crafting immersive and responsive web experiences. With Next.js, React.js, and a mastery of vanilla JavaScript at my fingertips, I bring ideas to life with elegance and efficiency.`}
          src={web}
        />
      </div>
      <div>
        <Expert
          title={`cumputer Network`}
          desc={`Navigate the intricate pathways of computer networks with a seasoned professional who possesses a deep understanding of network architecture, protocols, and technologies. With a foundation rooted in the fundamentals of networking principles, I bring expertise in designing, implementing, and maintaining robust network infrastructures that facilitate seamless communication and data exchange.`}
          src={network}
        />
      </div>
    </div>
  );
};

export default Testimonial;

function Expert({ title, desc, src }: Prop) {
  // +++++++++++++++++++++++
  const testiRef = useRef(null);

  /************************************** */

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: testiRef.current,
          toggleActions: "restart pause none none",
          start: "start bottom-=100",
        },
      });
      t1.to("#hr", {
        width: 200,
        duration: 0.8,
        ease: "power1.out",
        delay: 1,
      });
    }, testiRef);
    return () => ctx.revert();
  }, []);

  // ____________________________________________________-

  return (
    <div ref={testiRef} className={styles.container}>
      <h3>{title}</h3>
      <hr id="hr" />
      <div className={styles.paragraph}>
        <img src={src} alt={`${title}`} />
        <p>{desc}</p>
      </div>
    </div>
  );
}
