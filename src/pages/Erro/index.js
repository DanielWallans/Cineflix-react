import { Link } from 'react-router-dom';
import './erro.css';

function Erro() {
    return(
        <div className="not-found">
            <h2>404</h2>
            <h3>Pagina nao encontrada</h3>
            <Link to="/">Veja catalago de Filmes</Link>
        </div>
    )
}

export default Erro;