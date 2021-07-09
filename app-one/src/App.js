import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('red');
	const [isChecked, setChecked] = useState(false);

	const updateColor = color === 'red' ? 'blue' : 'red';
	const text = color === 'red' ? 'Change to blue' : 'Change to red';

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
			<input type="checkbox" onClick={() => setChecked(!isChecked)} />
		</div>
	);
}

export default App;
