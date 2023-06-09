import styles from "./DropDown.module.scss";
import chevronIcon from "../../assets/chevron-icon.svg";
import { useState } from "react";

/**
 * Dropdown element with title and description or list
 * @param {string} title Title of the Lease
 * @param {string} [text] Description of the Lease
 * @param {string} [lis] List of equipments of the Lease
 * @param {string} [type] One or two DropDown per lines
 * @returns {JSX.Element} DropDown Element
 */
export default function DropDown({ title, text, lis, type }) {
	const [showText, setShowText] = useState(false);

	function handleClick() {
		setShowText((bool) => !bool);
	}

	return (
		<div className={`${styles.dropDown} ${type === "row" ? styles.rowDropDown : ""}`}>
			<h3 className={styles.title} onClick={handleClick}>
				{title}
				<img className={`${styles.chevron} ${showText && styles.open}`} src={chevronIcon} alt="Icon Chevron"></img>
			</h3>

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
