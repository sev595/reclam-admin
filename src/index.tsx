import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";

import "nprogress/nprogress.css";
import App from "src/App";
import { SidebarProvider } from "src/contexts/SidebarContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </HelmetProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
