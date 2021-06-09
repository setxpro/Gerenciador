import { useRoutes } from 'hookrouter';
import { routes } from '../Routes';

export default function Gerenciador() {
    return useRoutes(routes);
}