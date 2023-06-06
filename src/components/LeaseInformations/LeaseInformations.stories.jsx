import React from "react";
import LeaseInformations from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/LeaseInformations",
	component: LeaseInformations,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		lease: {
			id: "c67ab8a7",
			title: "Appartement cosy",
			cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			pictures: [
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
				"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
			],
			description:
				"Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
			host: {
				name: "Nathalie Jean",
				picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
			},
			rating: "5",
			location: "Ile de France - Paris 17e",
			equipments: ["Équipements de base", "Micro-Ondes", "Douche italienne", "Frigo", "WIFI"],
			tags: ["Batignolle", "Montmartre"],
		},
		TAGS: [{ name: "Batignolle" }, { name: "Montmartre" }],
		DROP_DOWNS: [
			{
				title: "Description",
				text: "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
			},
			{ title: "Équipements", lis: ["Équipements de base", "Micro-Ondes", "Douche italienne", "Frigo", "WIFI"] },
		],
	},
	argTypes: {
		lease: {
			defaultValue: {},
			description: "Lease Object",
			table: {
				type: { summary: "object" },
				defaultValue: { summary: {} },
			},
		},
		TAGS: {
			defaultValue: [],
			description: "List of tags",
			table: {
				type: { summary: "array" },
				defaultValue: { summary: [] },
			},
		},
		DROP_DOWNS: {
			defaultValue: [{}],
			description: "List of Object{title, text || lis}",
			table: {
				type: { summary: "array" },
				defaultValue: { summary: [{}] },
			},
		},
	},
};

export const Default = ({ lease, TAGS, DROP_DOWNS }) => {
	return (
		<BrowserRouter>
			<LeaseInformations lease={lease} TAGS={TAGS} DROP_DOWNS={DROP_DOWNS} />
		</BrowserRouter>
	);
};
