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

// Write a test for the calculator component that verifies that 1+1 causes the result text to be Result: 2

// Write a test for the calculator component that verifies that 1-1 causes the result text to be Result: 0

// Write a test for the calculator component that verifies that 2*2 causes the result text to be Result: 4

// Write a test for the calculator component that verifies that 4/2 causes the result text to be Result: 2

// Write a test that verifies that if you do multiple operations with different input values only the final operations result is displayed.

// Write a test that verifies that the undo button is not present when no operations have been performed.

// Write a test that shows that the undo button is only displayed after at least one operation has been done.

// Write a test that does an addition operation, changes the input two values, undoes the operation, and verifies the input fields are now from the addition.
