import "./App.css";
import AppRouter from "./router";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
