import React, { useState } from 'react';

type Operation = {
  result: number;
  num1: number;
  num2: number;
  type: 'add' | 'subtract' | 'multiply' | 'divide';
};

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [operations, setOperations] = useState<Operation[]>([]);

  const getSymbol = (type: 'add' | 'subtract' | 'multiply' | 'divide') => {
    switch (type) {
      case 'add':
        return '+';
      case 'subtract':
        return '-';
      case 'multiply':
        return '*';
      case 'divide':
        return '/';
    }
  };

  const handleOperationStack = (operation: Operation) => {
    const operationStack = [...operations];
    operationStack.push(operation);
    setOperations(operationStack);
  };

  const handleUndo = () => {
    const operationStack = [...operations];
    const lastOperation = operationStack.pop();
    setOperations(operationStack);
    if (lastOperation) {
      setNum1(lastOperation.num1);
      setNum2(lastOperation.num2);
      setResult(lastOperation.result);
    } else {
      setNum1(0);
      setNum2(0);
      setResult(0);
    }
  };

  const handleAddition = () => {
    const result = num1 + num2;
    setResult(result);
    const operation: Operation = {
      result,
      num1,
      num2,
      type: 'add',
    };
    handleOperationStack(operation);
  };

  const handleSubtraction = () => {
    const result = num1 - num2;
    setResult(result);
    const operation: Operation = {
      result,
      num1,
      num2,
      type: 'subtract',
    };
    handleOperationStack(operation);
  };

  const handleMultiplication = () => {
    const result = num1 * num2;
    setResult(result);
    const operation: Operation = {
      result,
      num1,
      num2,
      type: 'multiply',
    };
    handleOperationStack(operation);
  };

  const handleDivision = () => {
    if (num2 === 0) {
      setResult(0);
      return;
    }
    const result = num1 / num2;
    setResult(result);
    const operation: Operation = {
      result,
      num1,
      num2,
      type: 'divide',
    };
    handleOperationStack(operation);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <input
          style={{ margin: '10px' }}
          type='number'
          value={num1 === 0 ? '' : num1}
          data-testid='calculator-input-1'
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <input
          style={{ margin: '10px' }}
          type='number'
          value={num2 === 0 ? '' : num2}
          data-testid='calculator-input-2'
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button
          data-testid='add-button'
          onClick={handleAddition}
          style={{ marginRight: '10px' }}
        >
          Add
        </button>
        <button
          data-testid='subtract-button'
          onClick={handleSubtraction}
          style={{ marginRight: '10px' }}
        >
          Subtract
        </button>
        <button
          data-testid='multiply-button'
          onClick={handleMultiplication}
          style={{ marginRight: '10px' }}
        >
          Multiply
        </button>
        <button data-testid='division-button' onClick={handleDivision}>
          Divide
        </button>
      </div>
      <p data-testid='result'>Result: {result}</p>
      {operations.length > 0 && (
        <button data-testid='undo-button' onClick={handleUndo}>
          Undo
        </button>
      )}
      {operations.map((operation, index) => (
        <p key={index}>{`${operation.num1} ${getSymbol(operation.type)} ${
          operation.num2
        } = ${operation.result}`}</p>
      ))}
    </div>
  );
};

export default Calculator;
