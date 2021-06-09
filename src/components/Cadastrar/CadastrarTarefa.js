import { useState } from 'react';

import '../Listar/Cadastrar.css';
import { A, navigate } from 'hookrouter';
import Task from '../../models/task.model';

import { Button, Form, Jumbotron, Modal, Spinner } from 'react-bootstrap';


export default function CadastrarTarefa() {
    
    const [task, setTask] = useState('');
    const [formValidate, setFormValidate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setFormValidate(true);
        
        if (event.currentTarget.checkValidity() === true) {
            // get tasks 
            const tasksDb = localStorage['tasks'];
            const tasks = tasksDb ? JSON.parse(tasksDb) : []; //convert to Json of localStorage
            
            //persister task
            tasks.push(new Task(new Date().getTime(), task, false));
            localStorage['tasks'] = JSON.stringify(tasks); //convert to text to localStorage
            
            setSpinner(true);
            setShowModal(true);
        }
    }
    const handleChange = event => {
        setTask(event.target.value);
    }
    const closeModal = () => {
        navigate('/');
    }


    return(
        <div>
            <h3 className="text-center">Cadastrar</h3>
            <Jumbotron
                style={{
                    backgroundColor: '#DDD',
                    padding: '1rem'
                }}
            >
                <Form 
                    validated={ formValidate }
                    noValidate
                    onSubmit={ handleSubmit }
                >
                    <Form.Group className="p-5">
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Digite uma tarefa..."
                            minLength="5"
                            maxLength="100"
                            required
                            value={task}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            A Tarefa deve Conter ao menos 5 caracteres.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button
                            type="submit"
                            variant="success"
                        >
                            <span className={ spinner ? null : 'hidden' }>
                                <Spinner animation="border" size="sm"/>
                                </span>
                            <span className={ spinner ? 'hidden' : null } >Cadastrar</span>
                        </Button>
                        &nbsp;
                        <A href="/" className="btn btn-info" style={{color: '#fff'}}>Voltar</A>
                    </Form.Group>
                </Form>
            </Jumbotron>
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tarefa adicionada com sucesso!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={closeModal}>Continuar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}