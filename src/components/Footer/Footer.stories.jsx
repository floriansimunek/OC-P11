import Footer from "./index";
import { BrowserRouter } from "react-router-dom";

const FooterStory = {
	title: "UI/Footer",
	component: Footer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default FooterStory;

export const Default = () => (
	<BrowserRouter>
		<Footer />
	</BrowserRouter>
);
