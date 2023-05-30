import styles from "./TagsList.module.scss";
import Tag from "../Tag";

export default function TagsList({ tags }) {
	return (
		<ul className={styles.tagsList}>
			{tags.map((tag, k) => (
				<li key={k}>
					<Tag name={tag.name} />
				</li>
			))}
		</ul>
	);
}
