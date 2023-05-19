import "./Header.module.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
	return (
		<header>
			<img src={logo} alt="Logo Kasa" />
			<li>
				<a href="#">Accueil</a>
				<a href="#">À propos</a>
			</li>
		</header>
	);
}
