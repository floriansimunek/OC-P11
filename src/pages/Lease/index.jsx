import ImageSlider from "../../components/ImageSlider";
import LeaseInformations from "../../components/LeaseInformations";
import { useParams } from "react-router-dom";
import Api from "../../utils/Api";

const API = new Api();
const datas = await API.fetchData();

export default function Lease() {
	const { id } = useParams();
	const lease = datas.find((lease) => lease.id === id);

	const TAGS = [];
	const IMAGES = [];
	const DROP_DOWNS = [];

	lease.tags.forEach((tag) => {
		TAGS.push({ name: tag });
	});

	lease.pictures.forEach((picture) => {
		IMAGES.push(picture);
	});

	DROP_DOWNS.push({ title: "Description", text: lease.description }, { title: "Équipements", lis: lease.equipments });

	return (
		<main>
			<ImageSlider IMAGES={IMAGES} />
			<LeaseInformations lease={lease} TAGS={TAGS} DROP_DOWNS={DROP_DOWNS} />
		</main>
	);
}
