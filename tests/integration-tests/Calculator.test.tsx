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
test('should correctly handle subtraction of 1-1', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('[data-testid="calculator-input-1"]', '1');
  await page.fill('[data-testid="calculator-input-2"]', '1');
  await page.click('[data-testid="subtract-button"]');
  const result = await page.textContent('[data-testid="result"]');
  expect(result).toBe('Result: 0');
});

// Write an integration test with playwright that verifies that the multiplication of 8*8 causes the result text to be Result: 64
test('should correctly handle multiplication of 8*8', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('[data-testid="calculator-input-1"]', '8');
  await page.fill('[data-testid="calculator-input-2"]', '8');
  await page.click('[data-testid="multiply-button"]');
  const result = await page.textContent('[data-testid="result"]');
  expect(result).toBe('Result: 64');
});

// Write an integration test with playwright that verifies that the division of 10/2 causes the result text to be Result: 5
test('should correctly handle division of 10/2', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('[data-testid="calculator-input-1"]', '10');
  await page.fill('[data-testid="calculator-input-2"]', '2');
  await page.click('[data-testid="division-button"]');
  const result = await page.textContent('[data-testid="result"]');
  expect(result).toBe('Result: 5');
});
