import ListarTarefas from "./components/Listar/ListarTarefas";
import CadastrarTarefa from "./components/Cadastrar/CadastrarTarefa";
import AtualizarTarefas from "./components/Atualizar/AtualizarTarefa";

export const routes = {
  "/": () => <ListarTarefas />,
  "/cadastrar": () => <CadastrarTarefa />,
  "/atualizar/:id": ({ id }) => <AtualizarTarefas id={id} />,
};
