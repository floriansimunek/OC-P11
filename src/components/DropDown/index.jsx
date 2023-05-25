import styles from "./DropDown.module.scss";
import chevronIcon from "../../assets/chevron-icon.svg";
import { useState } from "react";

export default function DropDown({ title, text, lis, type }) {
	const [showText, setShowText] = useState(false);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	return (
		<div className={`${styles.dropDown} ${type === "row" ? styles.rowDropDown : ""}`}>
			<p className={styles.title} onClick={handleClick}>
				{title}
				<img className={`${styles.chevron} ${showText && styles.open}`} src={chevronIcon} alt="Icon Chevron"></img>
			</p>

			{showText && (
				<div className={styles.text}>
					{text ? (
						<p>{text}</p>
					) : (
						<ul>
							{lis.map((li, k) => (
								<li key={k}>{li}</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
