import "./Footer.module.scss";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo_bw.svg";

export default function Footer() {
	return (
		<footer>
			<Link to="/">
				<img src={logo} alt="Logo Kasa" />
			</Link>
			<p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
