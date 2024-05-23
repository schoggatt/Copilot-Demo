import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Calculator from '../../src/components/Calculator';

test('should render all the inputs and buttons', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const subtractButtonElement = screen.getByTestId('subtract-button');
  const multiplyButtonElement = screen.getByTestId('multiply-button');
  const divisionButtonElement = screen.getByTestId('division-button');

  // Verify the elements are present
  expect(numberInputElement1).toBeTruthy();
  expect(numberInputElement2).toBeTruthy();
  expect(addButtonElement).toBeTruthy();
  expect(subtractButtonElement).toBeTruthy();
  expect(multiplyButtonElement).toBeTruthy();
  expect(divisionButtonElement).toBeTruthy();
});

// Write a test for the calculator component that verifies that 1+1 equals 2
test('should calculate 1 + 1 = 2', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the add button
  fireEvent.click(addButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');
});

// Write a test for the calculator component that verifies that 1-1 equals 0
test('should calculate 1 - 1 = 0', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const subtractButtonElement = screen.getByTestId('subtract-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the subtract button
  fireEvent.click(subtractButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 0');
});

// Write a test for the calculator component that verifies that 2*2 equals 4
test('should calculate 2 * 2 = 4', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const multiplyButtonElement = screen.getByTestId('multiply-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '2' } });
  fireEvent.change(numberInputElement2, { target: { value: '2' } });

  // Click the multiply button
  fireEvent.click(multiplyButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 4');
});

// Write a test for the calculator component that verifies that 4/2 equals 2
test('should calculate 4 / 2 = 2', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const divisionButtonElement = screen.getByTestId('division-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '4' } });
  fireEvent.change(numberInputElement2, { target: { value: '2' } });

  // Click the division button
  fireEvent.click(divisionButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');
});

// Write a test that verifies that if you do multiple operations with different values only the final operations result is displayed.
test('should display the result of the last operation', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const subtractButtonElement = screen.getByTestId('subtract-button');
  const multiplyButtonElement = screen.getByTestId('multiply-button');
  const divisionButtonElement = screen.getByTestId('division-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the add button
  fireEvent.click(addButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '2' } });
  fireEvent.change(numberInputElement2, { target: { value: '2' } });

  // Click the subtract button
  fireEvent.click(subtractButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 0');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '3' } });
  fireEvent.change(numberInputElement2, { target: { value: '3' } });

  // Click the multiply button
  fireEvent.click(multiplyButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 9');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '4' } });
  fireEvent.change(numberInputElement2, { target: { value: '2' } });

  // Click the division button
  fireEvent.click(divisionButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');
});

// Write a test that verifies that the undo button is not present when no operations have been performed.
test('should not render the undo button when no operations have been performed', () => {
  render(<Calculator />);

  // Get the undo button element
  const undoButtonElement = screen.queryByTestId('undo-button');

  // Verify the undo button is not present
  expect(undoButtonElement).toBeNull();
});

// Write a test that does an addition operation, changes the input values, undoes the operation, and verifies the result is from the addition
test('should undo the last operation', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the add button
  fireEvent.click(addButtonElement);
  const undoButtonElement = screen.getByTestId('undo-button');

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '2' } });
  fireEvent.change(numberInputElement2, { target: { value: '2' } });

  // Click the undo button
  fireEvent.click(undoButtonElement);

  // Verify the result
  expect(resultElement.textContent).toBe('Result: 2');
});
