import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { TradingViewChart } from './components/trading-view-chart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <TradingViewChart />
    </BrowserRouter>
  );
}

export default App;
