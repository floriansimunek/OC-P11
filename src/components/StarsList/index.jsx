import styles from "./StarsList.module.scss";
import Star from "../Star";

/**
 * Rating of the Lease with colored Stars
 * @param {Array<Star>} stars Red stars (X/5) : display rating
 * @returns {JSX.Element} StarsList Element
 */
export default function StarsList({ stars }) {
	const starsElements = Array.from({ length: 5 }, (_, i) => <Star color={i < stars ? "#ff6060" : "#e3e3e3"} key={i} />);

	return <div className={styles.starsList}>{starsElements}</div>;
}
