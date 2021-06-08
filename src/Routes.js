import ListarTarefas from './components/ListarTarefas';
import CadastrarTarefa from './components/CadastrarTarefa';
import AtualizarTarefa from './components/AtualizarTarefa';

export const  routes = {
    '/': () => <ListarTarefas/>,
    '/cadastrar': () => <CadastrarTarefa/>,
    '/atualizar/:id': ({id}) => <AtualizarTarefa id={id} /> 
}