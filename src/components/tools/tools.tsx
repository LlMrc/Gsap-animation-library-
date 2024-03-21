import React from "react";
import style from "./style.module.css";
import Icon from "../data/icon";

function Tools() {
  return (
    <div className={style.wrapper}>
      <div className={style.box} />
      <Intro />
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
const Intro = () => {
  return (
    <p className={style.intro}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum sed
      perferendis minima minus! Pariatur quisquam illum odit beatae molestias
      ratione voluptatum assumenda, iste magnam quas aliquid doloribus.
      Voluptates, aliquam.
    </p>
  );
};
