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
  expect(resultElement).toBe(2);
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
  expect(resultElement).toBe(0);
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
  expect(resultElement).toBe(4);
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
  expect(resultElement).toBe(2);
});

// Write a test that verifies that the undo button works as expected with one addition operation
test('should undo the last operation', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const undoButtonElement = screen.getByTestId('undo-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the add button
  fireEvent.click(addButtonElement);

  // Verify the result
  expect(resultElement).toBe(2);

  // Click the undo button
  fireEvent.click(undoButtonElement);

  // Verify the result is empty
  expect(resultElement).toBe('');
});

// Write a test that verifies that the undo button works as expected with multiple operations
test('should undo the last operation', () => {
  render(<Calculator />);

  // Get the input and button elements
  const numberInputElement1 = screen.getByTestId('calculator-input-1');
  const numberInputElement2 = screen.getByTestId('calculator-input-2');
  const addButtonElement = screen.getByTestId('add-button');
  const multiplyButtonElement = screen.getByTestId('multiply-button');
  const undoButtonElement = screen.getByTestId('undo-button');
  const resultElement = screen.getByTestId('result');

  // Set the input values
  fireEvent.change(numberInputElement1, { target: { value: '1' } });
  fireEvent.change(numberInputElement2, { target: { value: '1' } });

  // Click the add button
  fireEvent.click(addButtonElement);

  // Verify the result
  expect(resultElement).toBe(2);

  // Click the multiply button
  fireEvent.click(multiplyButtonElement);

  // Verify the result
  expect(resultElement).toBe(1);

  // Click the undo button
  fireEvent.click(undoButtonElement);

  // Verify the result
  expect(resultElement).toBe(2);
});
