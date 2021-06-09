import { useEffect, useState } from 'react';

import { A } from 'hookrouter';

import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListTasks from './itensTarefas';

import Paginacao from './Paginacao';

export default function ListarTarefas() {

    const ITENS_PER_PAGE = 3;

    const [tasks, setTasks] = useState([]);
    const [loadTask, setLoadTask] = useState(true);
    const [totailItem, setTotailItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        function getTasks() {
            const tasksDb = localStorage['tasks'];
            let listTasks = tasksDb ? JSON.parse(tasksDb) : []; //convert object with parse
            setTotailItem(listTasks.length);
            setTasks(listTasks.splice((currentPage - 1) * ITENS_PER_PAGE, ITENS_PER_PAGE));
        }
        
        if (loadTask) {
            getTasks();
            setLoadTask(false);
        }
    
    }, [loadTask, currentPage]);

    function handlechangePage(page) {
        setCurrentPage(page);
        setLoadTask(true);
    }

    return(
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                        <A 
                            href="/cadastrar"
                            className="btn btn-success btn-sm">
                            <FontAwesomeIcon icon={faPlus}/>&nbsp;Nova Tarefa
                        </A>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItensListTasks 
                        tasks={tasks}
                        loadTask={setLoadTask}
                    />
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