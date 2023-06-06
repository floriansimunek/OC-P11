import React from "react";
import ImageSlider from "./index";

export default {
	title: "UI/ImageSlider",
	component: ImageSlider,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		pictures: [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg",
		],
	},
	argTypes: {
		pictures: {
			defaultValue: [],
			description: "Multiple Images Slider",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: [] },
			},
		},
	},
};

export const Default = ({ pictures }) => {
	return <ImageSlider IMAGES={pictures} />;
};
