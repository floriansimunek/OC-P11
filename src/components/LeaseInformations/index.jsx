import styles from "./LeaseInformations.module.scss";
import TagsList from "../TagsList";
import StarsList from "../StarsList";
import DropDownsList from "../DropDownsList";

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
		lis: [
			"Climatisation",
			"Wi-Fi",
			"Cuisine",
			"Espace de travail",
			"Fer à repasser",
			"Sèche-cheveux",
			"Cintres",
		],
	},
];

export default function LeaseInformations({ title, location, owner }) {
	return (
		<>
			<div className={styles.informations}>
				<div className={styles.left}>
					<div className={styles.top}>
						<p className={styles.title}>{title}</p>
						<p className={styles.location}>{location}</p>
					</div>
					<div className={styles.bot}>
						<TagsList tags={TAGS} />
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.top}>
						<div className={styles.owner}>{owner}</div>
						<div className={styles.profilePicture}></div>
					</div>
					<div className={styles.bot}>
						<StarsList stars={3} />
					</div>
				</div>
			</div>
			<DropDownsList DropDowns={DROP_DOWNS} type={"h"} />
		</>
	);
}
