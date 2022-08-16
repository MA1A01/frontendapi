import Container from "react-bootstrap/Container";
import Menu from "./components/Menu/Menu.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Adicionar from "./pages/Adicionar";
import Atualizar from "./pages/Atualizar";
import Deletar from "./pages/Deletar";
import Listar from "./pages/Listar";

function App() {
  return (
    <Container>
    <BrowserRouter>
      <Menu />
      <Routes>
      <Route path="/adicionar" element={Adicionar} />
      <Route path="/atualizar" element={Atualizar} />
      <Route path="/deletar" element={Deletar} />
      <Route path="/listar" element={Listar} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
