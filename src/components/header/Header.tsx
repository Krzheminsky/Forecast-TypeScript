import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Forecast<br /><h1 className="title">Прогнозування наслідків аварій на ХНО</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  header" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Головна<span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item metod">
                            <a className="nav-link " target="_blank" rel="noreferrer" href="https://zakon.rada.gov.ua/laws/show/z0440-20#Text">Методика</a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link menu" to="/table">Таблиця НХР</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link menu" to="/how">Як користуватися</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link menu" to="/about">Про Forecast</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link whats menu" to="/application">Мобільний додаток</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu" target="_blank" rel="noreferrer" href="http://nuclearsimulation.inf.ua/" data-help="Моделювання уражаючих факторів ядерного вибуху">NuclearSimulation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Header;