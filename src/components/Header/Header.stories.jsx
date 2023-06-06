import Header from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export const Default = () => (
	<BrowserRouter>
		<Header />
	</BrowserRouter>
);
