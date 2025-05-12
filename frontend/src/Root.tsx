import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import Layout from "./Layout";
import { useState } from "react";

export const Root = () => {
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page1" element={<App name={name} />} />
        <Route path="/" element={<Layout setName={setName} />} />
      </Routes>
    </BrowserRouter>
  );
};
