import style from "./style.module.css";
import Icon from "../data/icon";
import Description from "../description/description";

function Tools() {
  return (
    <div className={style.wrapper}>
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
    </div>
  );
}

export default Tools;
