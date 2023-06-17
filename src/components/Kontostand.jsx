import("./Kontostand.css");
const Kontostand = props => {
	return (
		<article className='kontostand'>
			<p
				style={
					props.kontostand <= "0"
						? { color: "darkred" }
						: { color: "darkgreen" }
				}
			>
				{props.kontostand}€
			</p>
		</article>
	);
};

export default Kontostand;
