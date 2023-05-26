import styles from "./ThumbsList.module.scss";
import Thumb from "../Thumb";

export default function ThumbsList({ thumbs }) {
	return (
		<ul className={styles.thumbsList}>
			{thumbs.map((thumb, k) => (
				<li>
					<Thumb title={thumb.title} id={k} key={k} />
				</li>
			))}
		</ul>
	);
}
