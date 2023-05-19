import styles from "./DropDownsList.module.scss";
import DropDown from "../DropDown";

export default function DropDownsList({ DropDowns }) {
	return (
		<div className={styles.dropDownsList}>
			{DropDowns.map((dropDown, k) => (
				<DropDown title={dropDown.title} text={dropDown.text} key={k} />
			))}
		</div>
	);
}
