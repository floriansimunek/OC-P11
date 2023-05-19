import styles from "./DropDown.module.scss";
import { useState } from "react";

export default function DropDown() {
	const [showText, setShowText] = useState(false);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	return (
		<div className={styles.dropDown}>
			<p className={styles.title} onClick={handleClick}>
				Respect
			</p>
			{showText ? (
				<p className={styles.text}>
					La bienveillance fait partie des valeurs fondatrices de
					Kasa. Tout comportement discriminatoire ou de perturbation
					du voisinage entraînera une exclusion de notre plateforme.
				</p>
			) : null}
		</div>
	);
}
