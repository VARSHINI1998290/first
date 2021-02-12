import React, { useState } from "react";

const One = ({ num }) => {
	const [num1, setNum1] = useState(num);
	const incNum1 = () => {
		setNum1((prev) => prev + 1);
	};
	const decNum1 = () => {
		setNum1((prev) => prev - 1);
	};
	return (
		<div>
			<button onClick={decNum1} disabled={!num1}>
				-
			</button>
			<h1>{num1}</h1>
			<button onClick={incNum1}>+</button>
		</div>
	);
};
export default One;
