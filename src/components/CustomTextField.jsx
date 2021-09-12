import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CustomTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "cyan",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
      "& .MuiFormLabel-root": {
        color: "white",
      },
    },
  })(TextField);

  export default CustomTextField;