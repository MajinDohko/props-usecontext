import './App.css';
import Calculator from './components/Calculator';
import { CalculatorProvider } from './components/CalculatorProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './components/Result';

function App() {
  return (
    <>
      <CalculatorProvider>
      <Router>
          <Routes>
            <Route path='/' element={<Calculator/>}/>
            <Route path='/results' element={<Result/>}/>
          </Routes>
        </Router>
      </CalculatorProvider>
    </>
  );
}

export default App;