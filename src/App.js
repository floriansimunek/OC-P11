import "./App.css";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<HomeBanner />
			</main>
			<Footer />
		</>
	);
}
