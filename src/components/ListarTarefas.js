
import { A } from 'hookrouter';

export default function ListarTarefas() {
    return(
        <A 
            href="/cadastrar"
            className="btn btn-success btn-sm">
                Nova Tarefa
        </A>
        
    );
}