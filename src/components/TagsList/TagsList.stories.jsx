import TagsList from "./index";

const TagsListStory = {
	title: "UI/TagsList",
	component: TagsList,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
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

export default TagsListStory;

export const Default = ({ tags }) => <TagsList tags={tags} />;
