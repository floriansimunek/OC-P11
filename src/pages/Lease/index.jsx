import ImageSlider from "../../components/ImageSlider";
import LeaseInformations from "../../components/LeaseInformations";

export default function Lease() {
	const TAGS = [
		{
			name: "Cozy",
		},
		{
			name: "Canal",
		},
		{
			name: "Paris 10",
		},
	];

	const DROP_DOWNS = [
		{
			title: "Description",
			text: "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). ",
		},
		{
			title: "Équipements",
			lis: ["Climatisation", "Wi-Fi", "Cuisine", "Espace de travail", "Fer à repasser", "Sèche-cheveux", "Cintres"],
		},
	];

	return (
		<main>
			<ImageSlider />
			<LeaseInformations
				title="Cozy loft on the Canal Saint-Martin"
				location="Paris, Île-de-France"
				owner="Alexandre Dumas"
				TAGS={TAGS}
				DROP_DOWNS={DROP_DOWNS}
			/>
		</main>
	);
}
