import styles from "./ThumbsList.module.scss";
import Thumb from "../Thumb";

export default function ThumbsList({ thumbs }) {
	return (
		<ul className={styles.thumbsList}>
			{thumbs.map((thumb) => (
				<li key={thumb.id}>
					<Thumb title={thumb.title} backgroundImage={thumb.cover} id={thumb.id} />
				</li>
			))}
		</ul>
	);
}
