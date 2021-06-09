import ListarTarefas from './components/Listar/ListarTarefas';
import CadastrarTarefa from './components/Cadastrar/CadastrarTarefa';
import AtualizarTarefa from './components/Listar/AtualizarTarefa';

export const  routes = {
    '/': () => <ListarTarefas/>,
    '/cadastrar': () => <CadastrarTarefa/>,
    '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} /> 
}