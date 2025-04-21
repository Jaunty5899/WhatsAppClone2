import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels({ children }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: "var(--accent-color)",
              "&.Mui-checked": {
                color: "var(--accent-color)",
              },
            }}
          />
        }
        label={children}
      />
    </FormGroup>
  );
}
