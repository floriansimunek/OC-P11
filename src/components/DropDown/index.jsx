import styles from "./DropDown.module.scss";
import chevronIcon from "../../assets/chevron-icon.svg";
import { useState } from "react";

export default function DropDown({ title, text }) {
	const [showText, setShowText] = useState(false);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	return (
		<div className={styles.dropDown}>
			<p className={styles.title} onClick={handleClick}>
				{title}
				<img
					className={
						showText
							? `${styles.chevron + " " + styles.open}`
							: styles.chevron
					}
					src={chevronIcon}
				></img>
			</p>

			{showText ? <p className={styles.text}>{text}</p> : null}
		</div>
	);
}
