import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Adicionar() {
  const [Nome, setNome] = useState("");
  const [Periodo, setPeriodo] = useState("");
  const [Curso, setCurso] = useState("");
  const [Datanasc, setDate] = useState("");

  const postData = () => {
    console.log(Nome);
    console.log(Periodo);
    console.log(Curso);
    console.log(Datanasc);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Nome"
        type="text"
        value={Nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Form.Control
        placeholder="Periodo (Manhã,Tarde,Noite)"
        type="text"
        value={Periodo}
        onChange={(e) => setPeriodo(e.target.value)}
      />
      <Form.Control
        placeholder="Curso (Presencial ou EAD)"
        type="text"
        value={Curso}
        onChange={(e) => setCurso(e.target.value)}
      />
      <Form.Control
        placeholder="Data de Nascimento"
        type="date"
        value={Datanasc}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button
        onClick={postData}
        type="submit"
        variant="primary"
        size="lg"
        active
      >
        Salvar
      </Button>
    </InputGroup>
  );
}

export default Adicionar;
