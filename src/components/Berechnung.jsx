import React, { useState, useEffect, useContext } from "react";
import "./Berechnung.css";
import { SeedCapitalContext } from "../context/Context";

const Berechnung = props => {
	const [userInputValue, setUserInputValue] = useState("");
	const { seedCapital, setSeedCapital } = useContext(SeedCapitalContext);

	return (
		<article className='berechnung'>
			<input
				type='number'
				placeholder='Gib einen Geldbetrag ein'
				step='0.01'
				value={userInputValue}
				onChange={event => setUserInputValue(event.target.value)}
			/>
			<div>
				<button
					onClick={() =>
						props.updateKontostand(
							(Number(seedCapital) + Number(userInputValue)).toFixed(2),
						)
					}
				>
					Einzahlen
				</button>

				<button
					onClick={() =>
						props.updateKontostand(
							(Number(seedCapital) - Number(userInputValue)).toFixed(2),
						)
					}
				>
					Auszahlen
				</button>
			</div>
		</article>
	);
};

export default Berechnung;
