import { makeStyles } from "@material-ui/core";
import signBg from "../../images/signup-bg.jpg";
export default makeStyles((theme) => ({
  signUp: {
    width: "100%",
    height: "250px",
    backgroundImage: `url(${signBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    width: "360px",
    height: "44px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255,0.9)",
    "&:placeholder": {
      marginLeft: "20px",
    },
  },
  boxer: {
    width: "550px",
    display: "flex",
    justifyContent: "space-between",
  },
  msgBtn: {
    border: "solid 1px white",
    width: "150px",
    height: "44px",
    color: "white",
    fontSize: "13px",
    fontWeight: "bold",
  },
}));
