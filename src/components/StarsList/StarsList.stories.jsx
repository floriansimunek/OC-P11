import React from "react";
import StarsList from "./index";

export default {
	title: "UI/StarsList",
	component: StarsList,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		rating: 0,
	},
	argTypes: {
		rating: {
			defaultValue: 0,
			description: "Indicates rating between 0 et 5",
			control: {
				type: "range",
				min: 0,
				max: 5,
				step: 1,
			},
			table: {
				type: { summary: "number[0, 5]" },
				defaultValue: { summary: 0 },
			},
		},
	},
};

export const Default = ({ rating }) => {
	return <StarsList stars={rating} />;
};
