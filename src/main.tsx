import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { PageContextProvider } from "./context/PageContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageContextProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <App />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          theme='dark'
        />
      </ThemeProvider>
    </PageContextProvider>
  </StrictMode>
);
