import { useState } from 'react';

import  PropTypes  from "prop-types";

import { Modal, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';



function CompletedTask(props) {

    const [openModal, setOpenModal] = useState(false);
    
    const handleOpenModal = event => {
        event.preventDefault();
        setOpenModal(true);   
    }

    const handleCloseModal = event => {
        setOpenModal(false);
    }

    const handleCompletedTask = event => {
        event.preventDefault();
        const tasksDb = localStorage['tasks'];
        let tasks = tasksDb ? JSON.parse(tasksDb) : [];
        tasks = tasks.map(task => {
            if (task.id === props.task.id)
            {
                task.completed = true;
            }

            return task;
        });

        localStorage['tasks'] = JSON.stringify(tasks);
        setOpenModal(false);
        props.loadTasks(true);
    }

    return(
        <span className={props.className}>
            <Button className="btn-sm" onClick={handleOpenModal} >
                <FontAwesomeIcon icon={faClipboardCheck}/>
            </Button>
            <Modal show={openModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Concluir Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente concluir a seguinte tarefa ?
                    <br/>
                    <strong>{props.task.name}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCompletedTask}>
                        Sim
                    </Button>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );
}

CompletedTask.propTypes = {
    task: PropTypes.object.isRequired,
    loadTasks: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
}

export default CompletedTask;