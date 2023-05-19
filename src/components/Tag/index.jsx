import styles from "./Tags.module.scss";

export default function Tag({ name }) {
	return <div className={styles.tags}>{name}</div>;
}
