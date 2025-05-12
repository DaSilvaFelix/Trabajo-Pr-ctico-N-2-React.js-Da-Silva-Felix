import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import "../styles/Root.css"; // Importando el archivo CSS

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1 className="neon-text">Hola</h1>
              <h3 className="subtitle">
                Veamos si tiene una instancia en el servidor. <br />
                Escribe tu nombre en el buscador después de: <a href="http://localhost:5173/">http://localhost:5173/</a>
              </h3>
            </div>
          }
        />
        <Route path="/:nameParam" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
