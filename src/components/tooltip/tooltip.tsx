import style from "./style.module.css";
interface Prop {
  chars: String;
}
const Tooltip = ({ chars }: Prop) => {
  return (
    <div className={style.wrapper}>
      <p>{chars}</p>
      <div className={style.tip}>☝ click</div>
    </div>
  );
};

export default Tooltip;
