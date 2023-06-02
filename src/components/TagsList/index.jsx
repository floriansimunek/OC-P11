import styles from "./TagsList.module.scss";
import Tag from "../Tag";

/**
 * Display Tags of the Lease
 * @param {Array<Tag>} tags Tags of the lease
 * @returns {JSX.Element} TagsList Element
 */
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
