import Nav from "react-bootstrap/Nav";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <Nav
      fill
      variant="tabs"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="">Adicionar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="">Atualizar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="link-2">Deletar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="link-3">Listar</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
