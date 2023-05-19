import styles from "./404.module.scss";
import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<main className={styles.error404}>
			<p className={styles.error}>404</p>
			<p className={styles.message}>
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className={styles.link}>
				Retourner sur la page d'accueil
			</Link>
		</main>
	);
}
