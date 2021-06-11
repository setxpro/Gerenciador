import PropTypes from "prop-types";
import { Form, Jumbotron, Button, Modal } from "react-bootstrap";

import { navigate, A } from "hookrouter";
import { useEffect, useState } from "react";

function AtualizarTarefas(props) {
  const [openModal, setOpenModal] = useState(false);
  const [formValidate, setFormValidate] = useState(false);
  const [task, setTask] = useState("");
  const [loadTask, setLoadTask] = useState(true);

  useEffect(() => {
    if (loadTask) {
      const tasksDb = localStorage["tasks"];
      const tasks = tasksDb ? JSON.parse(tasksDb) : [];
      const task = tasks.filter((t) => t.id === parseInt(props.id))[0];

      setTask(task.name);
      setLoadTask(false);
    }
  }, [loadTask, props]);

  const goBack = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleCloseModal = () => {
    navigate("/");
  };

  const updateTask = (event) => {
    event.preventDefault();
    setFormValidate(true);
    if (event.currentTarget.checkValidity() === true) {
      //get tasks
      const tasksDb = localStorage["tasks"];
      let tasks = tasksDb ? JSON.parse(tasksDb) : [];
      //persister tasks update

      tasks = tasks.map((taskObj) => {
        if (taskObj.id === parseInt(props.id)) {
          taskObj.name = task;
        }
        return taskObj;
      });
      localStorage["tasks"] = JSON.stringify(tasks);

      setOpenModal(true);
    }
  };

  const handleTxtTask = (event) => {
    setTask(event.target.value);
  };
  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Jumbotron
        style={{
          backgroundColor: "#ddd",
          padding: "1rem",
        }}
      >
        <Form
          onSubmit={updateTask}
          validated={formValidate}
          noValidate
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Form.Group
            style={{
              marginBottom: "1rem",
            }}
          >
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={task}
              onChange={handleTxtTask}
              style={{ width: "900px" }}
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button variant="success" type="submit">
              Atualizar
            </Button>
            &nbsp;&nbsp;
            <A href="/" className="btn btn-light" onClick={goBack}>
              Voltar
            </A>
          </Form.Group>
        </Form>
      </Jumbotron>
      <Modal show={openModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tarefa atualizada com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

AtualizarTarefas.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AtualizarTarefas;
