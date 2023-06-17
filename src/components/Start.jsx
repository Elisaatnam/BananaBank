import { useContext, useState } from "react";
import("./Start.css");
import Girokonto from "./Girokonto";
import { SeedCapitalContext } from "../context/Context";

const Start = () => {
	const [userName, setUserName] = useState("");
	const { seedCapital, setSeedCapital } = useContext(SeedCapitalContext);
	const [showStart, setShowStart] = useState(true);

	return (
		<>
			{showStart && (
				<section className='start-section'>
					<h2>Willkommen!</h2>
					<h3>Erstelle Dein Banana Bank Konto</h3>
					<label htmlFor='user-name'>Dein Name</label>
					<input
						onChange={event => setUserName(event.target.value)}
						type='text'
						id='user-name'
						placeholder='Bonobono Bananasmith'
					/>
					<label htmlFor='seed-capital'>Dein Startkapital in Euro</label>
					<input
						onChange={event => setSeedCapital(event.target.value)}
						type='number'
						id='seed-capital'
						placeholder='100'
						step={0.01}
					/>

					<button onClick={() => setShowStart(false)}>Los geht's</button>
				</section>
			)}

			{!showStart && <Girokonto username={userName} />}
		</>
	);
};

export default Start;
