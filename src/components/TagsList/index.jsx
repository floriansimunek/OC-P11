import styles from "./TagsList.module.scss";
import Tag from "../Tag";

export default function TagsList({ tags }) {
	return (
		<ul className={styles.tagsList}>
			{tags.map((tag, k) => (
				<li>
					<Tag name={tag.name} key={k} />
				</li>
			))}
		</ul>
	);
}
