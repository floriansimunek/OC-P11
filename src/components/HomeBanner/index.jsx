import styles from "./HomeBanner.module.scss";

export default function HomeBanner() {
	return (
		<div className={styles.HomeBanner}>
			<p className={styles.title}>Chez vous, partout et ailleurs</p>
		</div>
	);
}
