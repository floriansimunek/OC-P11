import styles from "./Banner.module.scss";

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
