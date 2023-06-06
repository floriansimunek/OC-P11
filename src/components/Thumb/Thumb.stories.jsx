import Thumb from "./index";
import { BrowserRouter } from "react-router-dom";

const ThumbStory = {
	title: "UI/Thumb",
	component: Thumb,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		id: "c67ab8a7",
		title: "Appartement cosy",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
	},
	argTypes: {
		id: {
			defaultValue: "",
			description: "id of the lease",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		title: {
			defaultValue: "",
			description: "title of the lease",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		cover: {
			defaultValue: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			description: "Cover of the lease",
			options: [
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
			],
			control: {
				type: "select",
			},
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
	},
};

export default ThumbStory;

export const Default = ({ id, title, cover }) => (
	<BrowserRouter>
		<Thumb id={id} title={title} backgroundImage={cover} />
	</BrowserRouter>
);
