import { useEffect, useState } from "react";

import { A } from "hookrouter";

import { Table, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItensListTasks from "./itensTarefas";

import Paginacao from "./Paginacao";
import Ordenation from "./ordenacao";

export default function ListarTarefas() {
  const ITENS_PER_PAGE = 3;

  const [tasks, setTasks] = useState([]);
  const [loadTask, setLoadTask] = useState(true);
  const [totailItem, setTotailItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderAsc, setOrderAsc] = useState(false);
  const [orderDesc, setOrderDesc] = useState(false);
  const [filterTask, setFilterTask] = useState("");

  useEffect(() => {
    function getTasks() {
      const tasksDb = localStorage["tasks"];
      let listTasks = tasksDb ? JSON.parse(tasksDb) : []; //convert object with parse
      //filter
      listTasks = listTasks.filter(
        (t) => t.name.toLowerCase().indexOf(filterTask.toLowerCase()) === 0
      );
      //ordenation
      if (orderAsc) {
        listTasks.sort((t1, t2) =>
          t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1
        );
      } else if (orderDesc) {
        listTasks.sort((t1, t2) =>
          t1.name.toLowerCase() < t2.name.toLowerCase() ? 1 : -1
        );
      }
      //pagination
      setTotailItem(listTasks.length);
      setTasks(
        listTasks.splice((currentPage - 1) * ITENS_PER_PAGE, ITENS_PER_PAGE)
      );
    }

    if (loadTask) {
      getTasks();
      setLoadTask(false);
    }
  }, [loadTask, currentPage, orderAsc, orderDesc, filterTask]);

  function handlechangePage(page) {
    setCurrentPage(page);
    setLoadTask(true);
  }

  const handleOrder = (event) => {
    event.preventDefault();
    if (!orderAsc && !orderDesc) {
      setOrderAsc(true);
      setOrderDesc(false);
    } else if (orderAsc) {
      setOrderAsc(false);
      setOrderDesc(true);
    } else {
      setOrderAsc(false);
      setOrderDesc(false);
    }

    setLoadTask(true);
  };

  const handleFilterChange = (event) => {
    setFilterTask(event.target.value);
    setLoadTask(true);
  };

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <a href="/" onClick={handleOrder}>
                Tarefa &nbsp;
                <Ordenation orderAsc={orderAsc} orderDesc={orderDesc} />
              </a>
            </th>
            <th>
              <A href="/cadastrar" className="btn btn-success btn-sm">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;Nova Tarefa
              </A>
            </th>
          </tr>
          <tr>
            <th>
              <Form.Control
                type="text"
                value={filterTask}
                onChange={handleFilterChange}
                className="filter-task"
              />
            </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <ItensListTasks tasks={tasks} loadTask={setLoadTask} />
        </tbody>
      </Table>
      <Paginacao
        totailItem={totailItem}
        itensforPage={ITENS_PER_PAGE}
        currentPage={currentPage}
        changePage={handlechangePage}
      />
    </div>
  );
}
