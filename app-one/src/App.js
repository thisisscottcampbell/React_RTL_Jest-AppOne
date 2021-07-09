import React, { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (str) => {
	return str.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
	const [color, setColor] = useState('red');
	const [isChecked, setChecked] = useState(false);

	const updateColor = color === 'red' ? 'blue' : 'red';
	const text = color === 'red' ? 'Change to blue' : 'Change to red';
	const labelText = isChecked ? 'Enable Button' : 'Disable Button';

	return (
		<div className="App">
			<button
				disabled={isChecked}
				style={
					isChecked
						? { color: 'grey', backgroundColor: 'darkgray' }
						: { color: 'white', backgroundColor: color }
				}
				onClick={() => setColor(updateColor)}
			>
				{text}
			</button>
			<input
				type="checkbox"
				id="disable-btn-checkbox"
				onClick={() => setChecked(!isChecked)}
			/>
			<label htmlFor="disable-btn-checkbox">{labelText}</label>
		</div>
	);
}

export default App;
