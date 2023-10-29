import { Box } from "@mui/material";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Box
      display={"flex"} justifyContent={"center"} alignItems={"center"}>

        <Home />
      </Box>
    </div>
  )
} 