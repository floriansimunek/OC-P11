import styles from "./ThumbsList.module.scss";
import Thumb from "../Thumb";

export default function ThumbsList({ thumbs }) {
	return (
		<ul className={styles.thumbsList}>
			{thumbs.map((thumb, k) => (
				<li key={k}>
					<Thumb title={thumb.title} id={k} />
				</li>
			))}
		</ul>
	);
}
