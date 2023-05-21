import ImageSlider from "../../components/ImageSlider";
import LeaseInformations from "../../components/LeaseInformations";

export default function Lease() {
	return (
		<main>
			<ImageSlider />
			<LeaseInformations
				title="Cozy loft on the Canal Saint-Martin"
				location="Paris, Île-de-France"
				owner="Alexandre Dumas"
			/>
		</main>
	);
}
