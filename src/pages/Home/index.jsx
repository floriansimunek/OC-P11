import React, { useEffect, useState } from "react";
import "./Home.module.scss";
import Banner from "../../components/Banner";
import ThumbsList from "../../components/ThumbsList";
import backgroundImage from "../../assets/img/home_banner.png";
import Api from "../../utils/Api";

const API = new Api();

export default function Home() {
	const [thumbs, setThumbs] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const datas = await API.fetchData();
				setThumbs(datas);
			} catch (error) {
				console.error("Error fetching data : ", error);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<main>
				<Banner backgroundImage={backgroundImage} text="Chez vous, partout et ailleurs" />
				<ThumbsList thumbs={thumbs} />
			</main>
		</>
	);
}
