import styles from "./Tags.module.scss";

/**
 * Tag Element with text
 * @param {string} name Text of the Tag
 * @returns {JSX.Element} Tag Element
 */
export default function Tag({ name }) {
	return <div className={styles.tags}>{name}</div>;
}
