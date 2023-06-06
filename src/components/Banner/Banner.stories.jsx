import Banner from "./index";
import backgroundImage1 from "../../assets/img/home_banner.png";
import backgroundImage2 from "../../assets/img/about_banner.png";

export default {
	title: "UI/Banner",
	component: Banner,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		backgroundImage: backgroundImage1,
		text: "Chez vous, partout et ailleurs",
		size: false,
	},
	argTypes: {
		backgroundImage: {
			defaultValue: "",
			description: "Background Image of the Banner",
			options: [backgroundImage1, backgroundImage2],
			control: {
				type: "select",
			},
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		text: {
			defaultValue: "",
			description: "Text on the Banner",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "" },
			},
		},
		size: {
			defaultValue: false,
			description: "If Banner is big format or not (mobile only)",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "big" },
			},
		},
	},
};

export const Default = ({ backgroundImage, text, size }) => {
	let bannerSize;

	switch (size) {
		case true:
			bannerSize = "big";
			break;
		case false:
			bannerSize = "";
			break;
		default:
			bannerSize = "";
	}

	return <Banner backgroundImage={backgroundImage} text={text} size={bannerSize} />;
};
