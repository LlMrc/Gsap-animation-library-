import style from "./style.module.css";
import Icon from "../data/icon";
import Description from "../description/description";

function Tools() {
  return (
    <section
      className={style.wrapper}
      data-scroll
      data-scroll-section
      data-scroll-speed="0.3"
    >
      <div className={style.box} />
      <Description
        description={`
       My skills section showcases a kaleidoscope of my talents, blending
      creativity, problem-solving, and an unwavering passion for continuous
      learning.
     `}
      />
      {Icon.map((item, index) => {
        return (
          <>
            <div key={index} className={style.container}>
              <img src={item.icon} />
              <span>{item.name}</span>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Tools;
