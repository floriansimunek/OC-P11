import Header from "./index";
import { BrowserRouter } from "react-router-dom";

const HeaderStory = {
	title: "UI/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default HeaderStory;

export const Default = () => (
	<BrowserRouter>
		<Header />
	</BrowserRouter>
);
