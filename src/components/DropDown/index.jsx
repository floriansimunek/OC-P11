import styles from "./DropDown.module.scss";
import chevronIcon from "../../assets/chevron-icon.svg";
import { useState } from "react";

export default function DropDown({ title, text, lis, type }) {
	const [showText, setShowText] = useState(false);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	let liElements = [];

	if (lis) {
		lis.map((li, k) => liElements.push(<li key={k}>{li}</li>));
	}

	return (
		<div
			className={styles.dropDown}
			style={{
				width: type === "h" ? "calc(50% - 15px)" : "75%",
			}}
		>
			<p className={styles.title} onClick={handleClick}>
				{title}
				<img
					className={
						showText
							? `${styles.chevron + " " + styles.open}`
							: styles.chevron
					}
					src={chevronIcon}
					alt="Icon Chevron"
				></img>
			</p>

			{showText ? (
				text ? (
					<p className={styles.text}>{text}</p>
				) : (
					<ul className={styles.text}>{liElements}</ul>
				)
			) : null}
		</div>
	);
}
