import { useState } from "react";
import "./App.css";
import BananaHeader from "./components/BananaHeader";
import Start from "./components/Start";
import { SeedCapitalContext } from "./context/Context";

function App() {
	const [seedCapital, setSeedCapital] = useState();
	return (
		<SeedCapitalContext.Provider value={{ seedCapital, setSeedCapital }}>
			<main>
				<BananaHeader />
				<Start />
			</main>
		</SeedCapitalContext.Provider>
	);
}

export default App;
