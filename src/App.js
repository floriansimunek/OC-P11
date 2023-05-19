import "./App.css";
import TagsList from "./components/TagsList";

const TAGS = [
	{
		name: "Test 1",
	},
	{
		name: "Test 2",
	},
	{
		name: "Test 3",
	},
	{
		name: "Test 4",
	},
];

function App() {
	return (
		<div className="App">
			<TagsList tags={TAGS} />
		</div>
	);
}

export default App;
