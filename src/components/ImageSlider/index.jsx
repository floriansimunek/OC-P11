import { useState } from "react";
import styles from "./ImageSlider.module.scss";
import chevron from "../../assets/chevron-icon.svg";

export default function ImageSlider({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const previousSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className={styles.imageSlider}>
			<button className={`${styles.buttons} ${styles.left}`} onClick={previousSlide}>
				<img className={`${styles.chevron} ${styles.chevronLeft}`} src={chevron} alt="Chevron Icon" />
			</button>
			<img className={styles.slideImage} src={images[currentIndex]} alt="Slider Image" />
			<button className={`${styles.buttons} ${styles.right}`} onClick={nextSlide}>
				<img className={styles.chevron} src={chevron} alt="Chevron Icon" />
			</button>
		</div>
	);
}
