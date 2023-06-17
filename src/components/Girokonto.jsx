import { useContext, useState } from "react";
import Berechnung from "./Berechnung";
import Kontostand from "./Kontostand";
import { SeedCapitalContext } from "../context/Context";

import "./Girokonto.css";

const Girokonto = props => {
	const { seedCapital, setSeedCapital } = useContext(SeedCapitalContext);

	return (
		<section className='girokonto'>
			<h2>Hallo {props.username}, dein Kontostand beträgt:</h2>
			<Kontostand kontostand={seedCapital} />
			<Berechnung updateKontostand={setSeedCapital} />
		</section>
	);
};

export default Girokonto;
