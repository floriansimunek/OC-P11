export default class Api {
	async fetchData() {
		try {
			const response = await fetch("data.json");
			const json = await response.json();
			return json;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	}
}
