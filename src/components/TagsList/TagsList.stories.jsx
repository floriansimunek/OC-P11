import TagsList from "./index";

export default {
	title: "UI/TagsList",
	component: TagsList,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		tags: [
			{
				name: "Tag 1",
			},
			{
				name: "Tag 2",
			},
		],
	},
	argTypes: {
		tags: {
			defaultValue: [],
			description: "List of <Tag /> components",
			table: {
				type: { summary: "Array<Tag>" },
				defaultValue: { summary: "" },
			},
		},
	},
};

export const Default = ({ tags }) => <TagsList tags={tags} />;
