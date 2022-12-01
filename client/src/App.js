import './App.css';
import Form from './Form';
import ConsumptionDisplay from './ConsumptionDisplay';
import ContextProvider from './ContextProvider';
import Explainer from './Explainer';
import Credits from './Credits';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1>The Wafer App</h1>
        <Form />
        <ConsumptionDisplay />
        <Explainer />
      </div>
      <div className='spacer20'></div>
        <Credits />
    </ContextProvider>

  );
}

export default App;
