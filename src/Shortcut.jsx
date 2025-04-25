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
      <span style={{ display: "flex", gap: 10 }}>
        {keys.map((segment) => {
          return (
            <span
              style={{
                border: "1px solid grey",
                borderRadius: 4,
                padding: "4px 8px",
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
