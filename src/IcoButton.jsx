import IconButton from "@mui/material/IconButton";

export default function IcoButton({ Children }) {
  return (
    <IconButton
      aria-label="Search"
      sx={{
        marginLeft: 0.5,
        border: "inherit",
        borderRadius: 0,
        padding: "7px 10px 7px 10px",
        backgroundColor: "red",
      }}
    >
      {Children}
    </IconButton>
  );
}
