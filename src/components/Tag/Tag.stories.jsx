import Tag from "./index";

export default {
	title: "UI/Tag",
	component: Tag,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		name: "Test",
	},
	argTypes: {
		name: {
			defaultValue: "",
			description: "Tag element with text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
	},
};

export const Default = ({ name }) => <Tag name={name} />;
