import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      clientId="zvSXDHJCRkPtUMtZ5Ps186FIC7BFqE5x"
      domain="https://auth.mercadolibre.adminml.com"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/falopa",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
