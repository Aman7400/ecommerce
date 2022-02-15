import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love Food Buddy", { variant: "success" });
  };

  return <Button onClick={handleClick}>Welcome!</Button>;
}

export default App;
