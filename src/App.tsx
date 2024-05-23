import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <h1 style={{ textAlign: 'center' }}>CalculateTS</h1>
        <Calculator />
      </ErrorBoundary>
    </div>
  );
}

export default App;
