import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../404";
import ImageSlider from "../../components/ImageSlider";
import LeaseInformations from "../../components/LeaseInformations";
import Api from "../../utils/Api";

const API = new Api();

export default function Lease() {
	const { id: leaseId } = useParams();
	const [lease, setLease] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const datas = await API.fetchData();
				const selectedLease = datas.find((lease) => lease.id === leaseId);
				if (!selectedLease) {
					setError(true);
				}
				setLease(selectedLease);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, [leaseId]);

	if (error) {
		return <Error404 />;
	}

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
