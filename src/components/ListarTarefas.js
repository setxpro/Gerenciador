import { useEffect, useState } from 'react';

import { A } from 'hookrouter';

import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListTasks from './itensTarefas';

export default function ListarTarefas() {

    const [tasks, setTasks] = useState([]);
    const [loadTask, setLoadTask] = useState(true);

    useEffect(() => {
        function getTasks() {
            const tasksDb = localStorage['tasks'];
            let listTasks = tasksDb ? JSON.parse(tasksDb) : []; //convert object with parse
            setTasks(listTasks);
            console.log(listTasks);
        }
        
        if (loadTask) {
            getTasks();
            setLoadTask(false);
        }
    
    }, [loadTask]);

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
        </div>
    );
}