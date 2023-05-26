import "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/">
				<img src={logo} alt="Logo Kasa" />
			</Link>
			<li>
				<Link to="/">Accueil</Link>
				<Link to="/about">À propos</Link>
			</li>
		</header>
	);
}
