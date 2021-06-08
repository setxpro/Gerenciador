import { useState } from 'react';
import { 
    Button,
    Form,
    Jumbotron,
    Modal,
    Spinner
} from 'react-bootstrap';
import { A, navigate } from 'hookrouter';


export default function CadastrarTarefa() {
    return(
        <div>
            <h3 className="text-center">Cadastrar</h3>
            <Jumbotron
                style={{
                    backgroundColor: '#DDD',
                    padding: '1rem'
                }}
            >
                <Form>
                    <Form.Group className="p-5">
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Digite uma tarefa..."
                            minLength="5"
                            maxLength="100"
                            required
                            
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
                            Cadastrar
                        </Button>
                        &nbsp;
                        <A href="/" className="btn btn-info" style={{color: '#fff'}}>Voltar</A>
                    </Form.Group>
                </Form>
            </Jumbotron>
            <Modal show={false}>
                <Modal.Header>
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tarefa adicionada com sucesso!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">Continuar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}