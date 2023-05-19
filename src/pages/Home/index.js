import "./Home.module.scss";
import HomeBanner from "../../components/HomeBanner";
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
				<HomeBanner />
				<ThumbsList thumbs={THUMBS} />
			</main>
		</>
	);
}
