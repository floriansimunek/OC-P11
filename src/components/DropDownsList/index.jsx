import styles from "./DropDownsList.module.scss";
import DropDown from "../DropDown";

/**
 * List of multiple DropDown components
 * @param {Array<DropDown>} DropDowns Array of DropDown component
 * @param {string} [type] One or two DropDown per lines
 * @returns {JSX.Element} DropDownsList Element
 */

export default function DropDownsList({ DropDowns, type }) {
	const dropdownListClassName = `${styles.dropDownsList}
	${type === "row" ? styles.flexDirection_row : styles.flexDirection_column}
	${type === "row" ? styles.alignItems_start : styles.alignItems_center}`;

	return (
		<ul className={dropdownListClassName}>
			{DropDowns.map((dropDown, k) => (
				<li key={k}>
					<DropDown title={dropDown.title} text={dropDown.text} lis={dropDown.lis} type={type} />
				</li>
			))}
		</ul>
	);
}
