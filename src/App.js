import "./App.css";
import AppRouter from "./router";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
