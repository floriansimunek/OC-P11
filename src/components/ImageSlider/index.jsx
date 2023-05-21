import styles from "./ImageSlider.module.scss";
import "./slider.scss";
import slides from "../../assets/img/slide.png";
import chevron from "../../assets/chevron-icon.svg";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
	{
		url: slides,
	},
	{
		url: slides,
	},
	{
		url: slides,
	},
];

const properties = {
	prevArrow: (
		<button className={styles.arrowsBtn}>
			<img className={`${styles.chevron} ${styles.left}`} src={chevron} />
		</button>
	),
	nextArrow: (
		<button className={styles.arrowsBtn}>
			<img className={styles.chevron} src={chevron} />
		</button>
	),
	transitionDuration: "300",
	easing: "ease",
};

const indicators = (index) => (
	<div className="indicator">{index + 1 + `/${slideImages.length}`}</div>
);

export default function ImageSlider() {
	return (
		<div className={styles.slider}>
			<Slide {...properties} indicators={indicators}>
				{slideImages.map((slideImage, index) => (
					<div key={index}>
						<div
							className={styles.slides}
							style={{
								backgroundImage: `url(${slideImage.url})`,
							}}
						></div>
					</div>
				))}
			</Slide>
		</div>
	);
}
