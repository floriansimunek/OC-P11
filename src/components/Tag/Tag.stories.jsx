import Tag from "./index";

const TagStory = {
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

export default TagStory;

export const Default = ({ name }) => <Tag name={name} />;
