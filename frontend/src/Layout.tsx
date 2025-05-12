import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Root.css";

interface Prop {
  setName: (name: string) => void;
}

function Layout({ setName }: Prop) {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${nameRef.current?.value}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        setName(data.name);
        navigate("/page1");
      } else {
        setErrorMsg(data.msg || "Ocurrió un error inesperado.");
      }
    } catch (error) {
      setErrorMsg("Error en la solicitud. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="container">
      <h1 className="neon-text">Hola</h1>
      <p className="description">Ingresa tu nombre para verificar si tienes una instancia en el servidor.</p>
      <input type="text" placeholder="Escribe tu nombre" ref={nameRef} />
      <button onClick={handleSubmit}>Enviar</button>
      {errorMsg && <div className="error-message">{errorMsg}</div>}
    </div>
  );
}

export default Layout;
