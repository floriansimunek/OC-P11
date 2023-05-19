import styles from "./TagsList.module.scss";
import Tag from "../Tag";

export default function TagsList({ tags }) {
	return (
		<div className={styles.tagsList}>
			{tags.map((tag) => (
				<Tag name={tag.name} />
			))}
		</div>
	);
}
