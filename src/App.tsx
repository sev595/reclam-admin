import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { CssBaseline } from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider";
import { ToastProvider, useToasts } from "react-toast-notifications";
import RoutersContainer from "./routers/RoutersContainer";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <ToastProvider>
          <RoutersContainer />
        </ToastProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
