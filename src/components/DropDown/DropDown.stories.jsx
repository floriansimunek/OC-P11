import DropDown from "./index";
import { BrowserRouter } from "react-router-dom";

const DropDownStory = {
	title: "UI/DropDown",
	component: DropDown,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		title: "Title",
		text: "Description",
		lis: ["List 1", "List 2"],
		type: false,
	},
	argTypes: {
		title: {
			defaultValue: "",
			description: "Title of the dropDown",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		text: {
			defaultValue: "",
			description: "Description",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		lis: {
			defaultValue: "",
			description: "List of items",
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

export default DropDownStory;

export const Default = ({ title, text, lis, type }) => {
	let dropDownType;

	switch (type) {
		case true:
			dropDownType = "row";
			break;
		case false:
			dropDownType = "";
			break;
		default:
			dropDownType = "";
	}

	return (
		<BrowserRouter>
			<DropDown title={title} text={text} lis={lis} type={dropDownType} />
		</BrowserRouter>
	);
};
