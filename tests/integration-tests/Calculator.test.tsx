import { test, expect } from '@playwright/test';

// Write an integration test with playwright that verifies that the addition of 1+1 causes the result text to be Result: 2
test('should correctly handle addition of 1+1', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('[data-testid="calculator-input-1"]', '1');
  await page.fill('[data-testid="calculator-input-2"]', '1');
  await page.click('[data-testid="add-button"]');
  const result = await page.textContent('[data-testid="result"]');
  expect(result).toBe('Result: 2');
});

// Write an integration test with playwright that verifies that the subtraction of 1-1 causes the result text to be Result: 0

// Write an integration test with playwright that verifies that the multiplication of 8*8 causes the result text to be Result: 64

// Write an integration test with playwright that verifies that the division of 10/2 causes the result text to be Result: 5
