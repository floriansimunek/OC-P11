import React from "react";
import Star from "./index";

export default {
	title: "UI/Star",
	component: Star,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		isActive: false,
	},
	argTypes: {
		isActive: {
			defaultValue: false,
			description: "Indicates if the star is red or gray",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "#e3e3e3" },
			},
		},
	},
};

export const Default = ({ isActive }) => {
	let color;

	switch (isActive) {
		case true:
			color = "#ff6060";
			break;
		case false:
			color = "#e3e3e3";
			break;
		default:
			color = "#ff6060";
	}

	return <Star color={color} />;
};
