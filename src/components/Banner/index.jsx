import styles from "./Banner.module.scss";

/**
 * Banner with background image and text
 * @param {string} backgroundImage Image URL for banner background
 * @param {string} [text] Text on the banner
 * @param {string} [size] Get bigger (height) banner for mobile
 * @returns {JSX.Element} Banner Element
 */
export default function Banner({ backgroundImage, text, size }) {
	const bannerStyle = {
		"--banner-background-image": `url(${backgroundImage})`,
	};

	return (
		<div className={`${styles.banner} ${size === "big" ? styles.big : ""}`} style={bannerStyle}>
			{text && <h2 className={styles.title}>{text}</h2>}
		</div>
	);
}
