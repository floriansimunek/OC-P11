import styles from "./StarsList.module.scss";
import Star from "../Star";

export default function StarsList({ stars }) {
	let starsElements = [];

	for (let i = 0; i < 5; i++) {
		if (i < stars) {
			starsElements.push(<Star color={"#ff6060"} key={i} />);
		} else {
			starsElements.push(<Star color={"#e3e3e3"} key={i} />);
		}
	}

	return <div className={styles.starsList}>{starsElements}</div>;
}
