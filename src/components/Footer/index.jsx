import "./Footer.module.scss";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo_bw.svg";

export default function Footer() {
	return (
		<footer>
			<img src={logo} alt="Logo Kasa" />
			<p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
