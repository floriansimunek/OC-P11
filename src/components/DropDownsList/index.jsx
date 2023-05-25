import styles from "./DropDownsList.module.scss";
import DropDown from "../DropDown";

export default function DropDownsList({ DropDowns, type }) {
	return (
		<div
			className={styles.dropDownsList}
			style={{
				flexDirection: type === "row" ? "row" : "column",
				alignItems: type === "row" ? "flex-start" : "center",
			}}
		>
			{DropDowns.map((dropDown, k) => (
				<DropDown title={dropDown.title} text={dropDown.text} lis={dropDown.lis} type={type} key={k} />
			))}
		</div>
	);
}
