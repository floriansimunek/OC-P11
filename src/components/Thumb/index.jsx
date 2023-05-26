import styles from "./Thumb.module.scss";
import { Link } from "react-router-dom";

export default function Thumb({ title, id }) {
	return (
		<Link to={"/lease/" + id} className={styles.thumbs}>
			<h2 className={styles.title}>{title}</h2>
		</Link>
	);
}
