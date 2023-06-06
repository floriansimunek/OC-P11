import Footer from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/Footer",
	component: Footer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export const Default = () => (
	<BrowserRouter>
		<Footer />
	</BrowserRouter>
);
