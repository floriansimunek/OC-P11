import Header from "./index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "UI/Header",
	component: Header,
	tags: ["autodocs"],
};

export const Default = () => (
	<BrowserRouter>
		<Header />
	</BrowserRouter>
);
