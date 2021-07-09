import React, { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('red');

	const updateColor = color === 'red' ? 'blue' : 'red';
	const text = color === 'red' ? 'Change to blue' : 'Change to red';

	return (
		<div className="App">
			<button
				style={{ color: 'white', backgroundColor: color }}
				onClick={() => setColor(updateColor)}
			>
				{text}
			</button>
		</div>
	);
}

export default App;
