import "../styles/App.css";

interface Prop {
  name: string;
}

export const App = ({ name }: Prop) => {
  return (
    <div className="app-container">
      <h1 className="neon-text">Hola {name}, si tienes una instancia en el servidor</h1>
    </div>
  );
};
