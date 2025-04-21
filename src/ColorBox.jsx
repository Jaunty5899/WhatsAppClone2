import "./ColorBox.css";

export default function ColorBox({ bgcolor, selected, setColor }) {
  return (
    <div
      className={`colorBox ${selected && "selected"}`}
      style={{
        background: `linear-gradient(130deg,rgba(255, 255, 255, 1) 0%,${bgcolor} 100%`,
        filter: "saturate(200%)",
      }}
      onClick={() => setColor(bgcolor)}
    ></div>
  );
}
