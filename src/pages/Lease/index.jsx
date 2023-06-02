import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import LeaseInformations from "../../components/LeaseInformations";
import Api from "../../utils/Api";

const API = new Api();

export default function Lease() {
	const { id: leaseId } = useParams();
	const [lease, setLease] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const datas = await API.fetchData();
				const selectedLease = datas.find((lease) => lease.id === leaseId);
				setLease(selectedLease);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [leaseId]);

	if (lease) {
		const TAGS = lease.tags.map((tag) => ({ name: tag }));
		const IMAGES = [...lease.pictures];
		const DROP_DOWNS = [
			{ title: "Description", text: lease.description },
			{ title: "Équipements", lis: lease.equipments },
		];

		return (
			<main>
				<ImageSlider IMAGES={IMAGES} />
				<LeaseInformations lease={lease} TAGS={TAGS} DROP_DOWNS={DROP_DOWNS} />
			</main>
		);
	}
}
