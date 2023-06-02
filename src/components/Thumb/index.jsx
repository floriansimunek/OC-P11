import styles from "./Thumb.module.scss";
import { Link } from "react-router-dom";

/**
 * Display Thumbnail of Lease with Title and Image
 * @param {string} title Title of the Lease
 * @param {string} id id of the Lease
 * @param {string} backgroundImage Thumbnail image of the Lease
 * @returns {JSX.Element} Thumb Element
 */
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
