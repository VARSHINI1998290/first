import React, { useState } from "react";
import One from "./one";
function App() {
	const [num, setNum] = useState(null);
	const [visible, setVisible] = useState(true);

	const onSubmit = () => {
		setVisible(false);
	};

	return (
		<>
			{visible ? (
				<div>
					<input
						type="number"
						placeholder="Input a Num.."
						onChange={(e) => setNum(e.target.value)}
						value={num}
					/>
					<button onClick={onSubmit}>SUBMIT</button>
				</div>
			) : (
				<One num={num} />
			)}
		</>
	);
}
export default App;
