import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { A } from 'hookrouter';
import  CompletedTask from './ConcluirTarefa';

import './Cadastrar.css';
import RemoveTasks from './RemoverTarefa';

export default function ItensListTasks(props) {


    const selectCompleted = task => {
        return task.completed ? 'line-through' : 'none';
    }

    return(
     
        props.tasks.map( task => 
            <tr key={task.id}>
                <td width="75%"
                    style={{ textDecoration: selectCompleted(task) }}
                >{task.name}</td>
                <td className="text-right area-b">
                    <CompletedTask 
                        task={task}
                        loadTasks={props.loadTask}
                        className={task.completed ? 'hidden' : null}
                    />
                        &nbsp;
                    <A 
                        href={`/atualizar/${task.id}`} 
                        className={task.completed ? 'hidden' : 'btn btn-warning btn-sm'}>
                        <FontAwesomeIcon icon={faEdit}/>
                    </A>
                        &nbsp;
                    <RemoveTasks
                        task={task}
                        loadTasks={props.loadTask}
                    />
                </td>
            </tr>
        )
     
    );
}

ItensListTasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    loadTask: PropTypes.func.isRequired,
};