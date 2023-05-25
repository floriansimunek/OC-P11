import "./Home.module.scss";
import Banner from "../../components/Banner";
import ThumbsList from "../../components/ThumbsList";
import backgroundImage from "../../assets/img/home_banner.png";

const THUMBS = [
	{
		title: "Titre de la location 00",
	},
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
];

export default function Home() {
	return (
		<>
			<main>
				<Banner backgroundImage={backgroundImage} text="Chez vous, partout et ailleurs" />
				<ThumbsList thumbs={THUMBS} />
			</main>
		</>
	);
}
