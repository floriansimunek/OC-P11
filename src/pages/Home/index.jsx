import "./Home.module.scss";
import Banner from "../../components/Banner";
import ThumbsList from "../../components/ThumbsList";

const THUMBS = [
	{
		title: "Titre de la location 01",
	},
	{
		title: "Titre de la location 02",
	},
	{
		title: "Titre de la location 03",
	},
	{
		title: "Titre de la location 04",
	},
	{
		title: "Titre de la location 05",
	},
	{
		title: "Titre de la location 06",
	},
	{
		title: "Titre de la location 07",
	},
	{
		title: "Titre de la location 08",
	},
];

export default function Home() {
	return (
		<>
			<main>
				<Banner />
				<ThumbsList thumbs={THUMBS} />
			</main>
		</>
	);
}
