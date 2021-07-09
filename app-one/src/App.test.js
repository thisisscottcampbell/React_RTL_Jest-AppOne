import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelWithSpaces } from './App';
import App from './App';

test('button has the correct color', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(colorButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
	expect(colorButton.textContent).toBe('Change to red');
});

test('init button and checkbox conditions', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorButton).toBeEnabled();

	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('check box disables button on first click, and enables on second', () => {
	render(<App />);

	const button = screen.getByRole('button', { name: 'Change to blue' });
	const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

	fireEvent.click(checkbox);
	expect(button).not.toBeEnabled();

	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
});

test('disabled button turns dark gray when input is checked, and then returns', () => {
	render(<App />);

	const button = screen.getByRole('button', { name: 'Change to blue' });
	const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'darkgray' });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

describe('spaces before camel-cased capital letters', () => {
	test('Works for no inner cap', () => {
		expect(replaceCamelWithSpaces('Skelethon')).toBe('Skelethon');
	});
	test('Works for one inner caps', () => {
		expect(replaceCamelWithSpaces('BazookaTooth')).toBe('Bazooka Tooth');
	});
	test('Works for multiple inner caps', () => {
		expect(replaceCamelWithSpaces('NoneShallPass')).toBe('None Shall Pass');
	});
});
