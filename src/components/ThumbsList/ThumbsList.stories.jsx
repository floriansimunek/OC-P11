import ThumbsList from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/ThumbsList",
	component: ThumbsList,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
	args: {
		thumbs: [
			{
				id: "c67ab8a7",
				title: "Appartement cosy",
				cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			},
			{
				id: "b9123946",
				title: "Magnifique appartement proche Canal Saint Martin",
				cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
			},
			{
				id: "46d188c5",
				title: "Studio de charme - Buttes Chaumont",
				cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
			},
		],
	},
	argTypes: {
		thumbs: {
			defaultValue: [],
			description: "List of <Thumb /> components",
			table: {
				type: { summary: "Array<Thumb>" },
				defaultValue: { summary: "" },
			},
		},
	},
};

export const Default = ({ thumbs }) => (
	<BrowserRouter>
		<ThumbsList thumbs={thumbs} />
	</BrowserRouter>
);
