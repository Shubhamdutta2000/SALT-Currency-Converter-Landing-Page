import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material'
import "./App.css";
import theme from './theme'

import RouteComponent from "./Routes.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteComponent />
    </ThemeProvider>
  );
}

export default App;
