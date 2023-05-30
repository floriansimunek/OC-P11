import styles from "./Thumb.module.scss";
import { Link } from "react-router-dom";

export default function Thumb({ title, id, backgroundImage }) {
	const thumbStyle = {
		"--thumb-background-image": `url(${backgroundImage})`,
	};

	return (
		<Link to={"/lease/" + id} className={styles.thumbs} style={thumbStyle}>
			<h2 className={styles.title}>{title}</h2>
		</Link>
	);
}
