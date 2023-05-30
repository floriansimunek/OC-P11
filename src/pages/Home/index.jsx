import "./Home.module.scss";
import Banner from "../../components/Banner";
import ThumbsList from "../../components/ThumbsList";
import backgroundImage from "../../assets/img/home_banner.png";
import Api from "../../utils/Api";

let THUMBS = [];

const API = new Api();
const datas = await API.fetchData();

datas.map((data) => {
	THUMBS.push(data);
});

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
