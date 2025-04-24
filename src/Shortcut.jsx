export default function Shortcut({ title, keys }) {
  return (
    <>
      <span>{title}</span>
      <span
        style={{
          border: "1px solid grey",
          borderRadius: 4,
          padding: "5px",
        }}
      >
        {keys}
      </span>
    </>
  );
}
