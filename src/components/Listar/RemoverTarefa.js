import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function RemoveTasks(props) {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = event => {
        event.preventDefault();
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleRemoveModal = event => {
        event.preventDefault();
        const tasksDb = localStorage['tasks'];
        let tasks = tasksDb ? JSON.parse(tasksDb) : [];
        tasks = tasks.filter(task => task.id !== props.task.id);
        localStorage['tasks'] = JSON.stringify(tasks);

        setOpenModal(false);
        props.loadTasks(true) ;
    }

    return (
        <span>
            <Button variant="danger" className="btn-sm" onClick={handleOpenModal}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>
            <Modal show={openModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Excluir tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja Realmente excluir está tarefa ?
                    <br/>
                    <strong>{props.task.name}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"
                        onClick={handleRemoveModal}
                    >
                        Sim
                    </Button>
                    <Button variant="light"
                        onClick={handleCloseModal}
                    >
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );

}

RemoveTasks.propTypes = {
    task: PropTypes.object.isRequired,
    loadTasks: PropTypes.func.isRequired,
}

export default RemoveTasks;