const TransactionHistory = props => {
	return (
		<div>
			<h3>Transaktionsverlauf:</h3>
			<ul>
				{props.history.map((transaction, index) => (
					<li key={index}>
						{transaction.type === "einzahlen" ? "Einzahlen" : "Auszahlen"}:{" "}
						{transaction.amount}€ - {transaction.timestamp}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TransactionHistory;
