import IconButton from "@mui/material/IconButton";
import { forwardRef } from "react";

const IcoButton = forwardRef(function IcoButton(
  { children, toggleSearch },
  ref
) {
  return (
    <IconButton
      aria-label="Search"
      sx={{
        marginLeft: 0.5,
        border: "inherit",
        borderRadius: 0,
        padding: "7px 10px 7px 10px",
      }}
      onClick={toggleSearch}
      ref={ref}
    >
      {children}
    </IconButton>
  );
});

export default IcoButton;
