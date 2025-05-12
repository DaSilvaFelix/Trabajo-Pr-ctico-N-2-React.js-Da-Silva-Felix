import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/App.css";

export const App = () => {
  const { nameParam } = useParams<{ nameParam: string }>();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/${nameParam}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => console.error("Error en la solicitud:", error));
  }, [nameParam]);

  return (
    <div className="app-container">
      <h1 className="neon-text">Hola {name}, si tienes una instancia en el servidor</h1>
    </div>
  );
};
