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
            <Jumbotron>
                <Form>
                    <Form.Group>
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
                </Form>
            </Jumbotron>
        </div>
    );
}