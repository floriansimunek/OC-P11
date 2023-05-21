import styles from "./TagsList.module.scss";
import Tag from "../Tag";

export default function TagsList({ tags }) {
	return (
		<div className={styles.tagsList}>
			{tags.map((tag, k) => (
				<Tag name={tag.name} key={k} />
			))}
		</div>
	);
}
