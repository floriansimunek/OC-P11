import styles from "./Thumb.module.scss";

export default function Thumb({ title }) {
	return (
		<div className={styles.thumbs}>
			<p className={styles.title}>{title}</p>
		</div>
	);
}
