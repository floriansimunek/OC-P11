import styles from "./ThumbsList.module.scss";
import Thumb from "../Thumb";

export default function ThumbsList({ thumbs }) {
	return (
		<div className={styles.thumbsList}>
			{thumbs.map((thumb, k) => (
				<Thumb title={thumb.title} id={k} key={k} />
			))}
		</div>
	);
}
