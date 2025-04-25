export default function Shortcut({ title, keys }) {
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{title}</span>
      <span style={{ display: "flex", gap: 8 }}>
        {keys.map((segment) => {
          return (
            <span
              style={{
                border: "1px solid grey",
                borderRadius: 4,
                padding: "6px 10px",
              }}
            >
              {segment}
            </span>
          );
        })}
      </span>
    </span>
  );
}
