import styles from "./DropDownsList.module.scss";
import DropDown from "../DropDown";

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
