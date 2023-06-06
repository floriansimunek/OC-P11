import DropDown from "../DropDown";
import DropDownsList from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/DropDownsList",
	component: DropDownsList,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		DropDowns: [
			{
				title: "Title",
				text: "Description",
				lis: [],
				type: false,
			},
			{
				title: "Title",
				text: "",
				lis: ["List 1", "List 2"],
				type: false,
			},
		],
		type: false,
	},
	argTypes: {
		DropDowns: {
			defaultValue: [],
			description: "List of DropDown informations",
			table: {
				type: { summary: "object" },
				defaultValue: { summary: "" },
			},
		},
		type: {
			defaultValue: false,
			description: "One line dropDown or not",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "row" },
			},
		},
	},
};

export const Default = ({ DropDowns, type }) => {
	let dropDownsListType;

	switch (type) {
		case true:
			dropDownsListType = "row";
			break;
		case false:
			dropDownsListType = "";
			break;
		default:
			dropDownsListType = "";
	}

	return (
		<BrowserRouter>
			<DropDownsList DropDowns={DropDowns} type={dropDownsListType} />
		</BrowserRouter>
	);
};
